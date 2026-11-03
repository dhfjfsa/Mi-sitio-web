section .data
    mensaje db "INGENERÍAS - INSTITUTO TECNOLÓGICO DE CD. VALLES", 10
            db "1. Ing. en Sistemas Computacionales", 10
            db "2. Ing. en Gestion Empresarial",10
            db "3. Ing. Industial",10
            db "4. Ing. Agronomia",10
            db "5. Ing. Alimentaria",10
            db "6. Ing. Ambiental",10
            db "7. Ing. Desarrollo de Aplicaciones",10
            db "8. Ing. Inteligencia Artificial",10
            longitud equ $ - mensaje 

section .text
    global _start

    _start:
        mov rax, 1
        mov rdi, 1
        mov rsi, mensaje
        mov rdx, longitud
        syscall

        mov rax, 60
        xor rdi, rdi
        syscall