%macro IMPRIMIR 2                   ; %1 = dirección, %2 = longitud
    mov     rax, 1                  ; syscall número 1 = write
    mov     rdi, 1                  ; descriptor 1 = salida estándar
    mov     rsi, %1                 ; dirección de la cadena
    mov     rdx, %2                 ; longitud en bytes
    syscall
%endmacro

section .data
    titulo  db "INGENIERÍAS - INSTITUTO TECNOLÓGICO DE CD. VALLES", 10
    l_tit   equ $ - titulo          ; longitud calculada automáticamente
    linea   db "--------------------------------------------------", 10
    l_lin   equ $ - linea
    c1      db "1. Ing. en Sistemas Computacionales", 10
    l_c1    equ $ - c1
    c2      db "2. Ing. Industrial", 10
    l_c2    equ $ - c2
    c3      db "3. Ing. Empresarial", 10
    l_c3    equ $ - c3
    c4      db "4. Ing. Agronomía", 10
    l_c4    equ $ - c4
    c5      db "5. Ing. Alimentaria", 10
    l_c5    equ $ - c5
    c6      db "6. Ing. Ambiental", 10
    l_c6    equ $ - c6
    c7      db "7. Ing. Desarrollo de Aplicaciones", 10
    l_c7    equ $ - c7
    c8      db "8. Ing. Inteligencia Artificial", 10
    l_c8    equ $ - c8

section .text
    global _start

_start:
    IMPRIMIR titulo, l_tit
    IMPRIMIR linea,  l_lin
    IMPRIMIR c1, l_c1
    IMPRIMIR c2, l_c2
    IMPRIMIR c3, l_c3
    IMPRIMIR c4, l_c4
    IMPRIMIR c5, l_c5
    IMPRIMIR c6, l_c6
    IMPRIMIR c7, l_c7
    IMPRIMIR c8, l_c8
    IMPRIMIR linea,  l_lin

    mov     rax, 60                 ; syscall número 60 = exit
    xor     rdi, rdi                ; código de salida = 0
    syscall