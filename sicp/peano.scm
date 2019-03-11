(define (peano x y) (
	if (= x 0) (x) (peano (- x 1) (+ y 1)
)))
(peano 3 4)
