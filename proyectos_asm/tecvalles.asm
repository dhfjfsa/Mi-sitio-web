global _start

section .data
    msg db "¡Hola Tec valles!", 10
    len equ $ - msg

section .text
_start:
    ; Imprimir texto en pantalla
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; mensaje
    mov rdx, len        ; tamaño
    syscall

    ; Terminar el programa
    mov rax, 60         ; sys_exit
    xor rdi, rdi        ; código 0
    syscall