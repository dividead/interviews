```
instruction [32]
    opcode [6] -> 100000 -> ADD
    rc [5] -> 00011 -> 3 -> R[3] | destination
    ra [5] -> 00001 -> 1 -> R[1] | source A
    rb [5] -> 00010 -> 2 -> R[2] | source B
    unused [11] -> 00000000000
100000 00011 00001 00010 00000000000
0b10000000011000010001000000000000
0x80611000
ADD(r1, r2, r3)
ADD(a, b, c) => R[c] <- R[a] + R[b]

arithmetic: ADD, SUB, MUL, DIV
compare: CMPEQ, CMPLT, CMPLE
boolean: AND, OR, XOR, XNOR
shift: SHL, SHR, SAR

constant instruction [32] = [ opcode [6], rc [5], ra [5], constant [16] ]
110000 00011 00001 1111111111111101
ADDC(r1, -3, r3)
ADDC(a, const, c) => R[c] <- R[a] + sext(const)
sext -> sign extension -> extend const from 16 to 32 bit

load and store instructions [32] = [ opcode [6], rc [5], ra [5], constant [16] ]
LD(a, const, c) => R[c] <- M[ R[a] + sext(const) ]
ST(c, const, a) => M[ R[a] + sext(const) ] <- R[c]
M -> a = 31 access a constant address
R -> const = 0 use only a register value

int x, y
y = x * 37
R[0] <- M[0x1008(x in memory)]
R[0] <- R[0] * 37
M[0x100C(y in memory)] <- R[0]
LD(R[31], 0x1008, R[0])
MULC(R[0], 37, R[0])
ST(R[0], 0x100C, R[31])

branch instructions [32] = [ opcode [6], rc [5], ra [5], offset:signed constant [16] ]
BEQ, BNE
BEQ(a, offset, c):
 NPC <- PC + 4
 R[c] <- NPC
 if R[a] == 0
   PC <- NPC + 4 * offset 
 else
   PC <- NPC

jump instruction [32] = [ opcode [6], rc [5], ra [5], unused [16] ]
JMP(a, c) => R[c] <- PC + 4 
             PC <- a
```