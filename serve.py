#!/usr/bin/env python3
"""
Servidor Local para CFO - Centro Online de Física
Execute este arquivo para servir o site localmente
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format%args}")

def start_server():
    """Inicia o servidor local"""
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔══════════════════════════════════════════════════════╗
║     CFO - Centro Online de Física                    ║
║                                                      ║
║  Servidor Local Iniciado com Sucesso! 🚀            ║
╚══════════════════════════════════════════════════════╝

📍 Acesse o site em:
   http://localhost:{PORT}
   http://127.0.0.1:{PORT}

📂 Diretório: {DIRECTORY}

⌨️  Pressione CTRL+C para parar o servidor

        """)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor encerrado com sucesso!")
            print("Obrigado por usar o CFO!")

if __name__ == "__main__":
    start_server()
