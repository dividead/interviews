package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	// стандартный роутер во многих го-приложениях
	"github.com/gorilla/mux"
	// изначально планировался base64, но увидев, что clck.ru генерирует 3х-символьные ключи, нашел такое решение
	"kkn.fi/base62"
)

// тут лучше использовать базу данных, но для прототипа сойдет
// запись и чтение О(1)
var db []string

// кодируем и возвращаем индекс записи в слайсе
func encode(str string) string {
	// стоило бы проверять существование, перед записью, а пока допускаются дупликаты
	db = append(db, str)
	// не тредобезопасно, но бд решит эту проблему
	return base62.Encode(int64(len(db)))
}

// декодируем ключ и проверяем существует ли по этому индексу запись
func decode(str string) (string, error) {
	// кеширование популярных ссылок поможет избежать пиковых нагрузок
	n, err := base62.Decode(str)
	if err != nil {
		return "", err
	}
	if n <= int64(len(db)) {
		return db[n], nil
	}
	return "", errors.New("dont exist")
}

func main() {
	r := mux.NewRouter()

	// не помешал бы хоумпейдж

	// повторяется структура clck.ru
	r.Path("/--").Queries("url", "{url}").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// берем ссылку из квери
		key := r.FormValue("url")
		w.WriteHeader(http.StatusOK)
		// и возвращаем закодированное значение
		fmt.Fprintf(w, "%v\n", encode(key))
	}).Methods("GET")

	// все остальные роуты считаются ключами
	r.HandleFunc("/{key}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		h := vars["key"]
		str, err := decode(h)
		if err != nil {
			// тут надо бы возвращать две разные ошибки: отсутсвующий и поврежденный ключ
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "%v\n", str)
	}).Methods("GET")

	// возможно стоит посмотреть в сторону fasthttp
	srv := &http.Server{
		Handler: r,
		// надо вынести в конфиг
		Addr:         "127.0.0.1:8080",
		WriteTimeout: time.Second,
		ReadTimeout:  time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
