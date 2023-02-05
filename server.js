case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${command} nomer|pengirim|pesan\n\nContoh ${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
                let mq1 = nomor + '@s.whatsapp.net'
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*NoxyBotz*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`

				 let buttons = [
                    { buttonId: { displayText: `Balas Menfes`, id: `${prefix}chatwith2 ${sender.replace("@s.whatsapp.net", "")}` } },
                    { buttonId: { displayText: `Kirim Menfesmu`, id: `${prefix}menfess` } }
                		]
					naze.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: gambar, buttons, footer: `Ciee ada yang ngirim pesan nih\n© 𝕰𝖗𝖎𝖈𝕯𝖊𝖛` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break
