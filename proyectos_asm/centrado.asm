%macro texto_centrado 1
    %strlen tam %1
    %assign espacios (80 - tam) / 2
    times espacios db 32
    db %1, 10
%endmacro

%macro item_lista 1
       times 22 db 32
       db %1, 10
%endmacro

section .data
    mensaje:
         db 10, 10, 10
         db "INGENERÍAS - INSTITUTO TECNOLÓGICO DE CD. VALLES"
         db 10 
            item_lista "1. Ing. en Sistemas Computacionales"
            item_lista  "2. Ing. en Gestion Empresarial"
            item_lista  "3. Ing. Industial"
            item_lista  "4. Ing. Agronomia"
            item_lista  "5. Ing. Alimentaria"
            item_lista  "6. Ing. Ambiental"
            item_lista  "7. Ing. Desarrollo de Aplicaciones"
            item_lista  "8. Ing. Inteligencia Artificial"
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