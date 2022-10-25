import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
const [items, setItems] = useState([
{itemName: "Pickahu", quantity: 1, IsSelected: false},
{itemName: "Charmander", quantity: 1, IsSelected: true},
{itemName: "Squirtle", quantity: 1, IsSelected: false},
{itemName: "Bulbasaur", quantity: 1, IsSelected: false},
]);

return (
  <div className="app-background">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUSEhIWFRUWFRYWFRUVFhYVFhgVFhUXFhUXFRUYHSggGBolGxgVITEhJS0rLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0mHyUtLS4tLS0rKy0tLS0tLS8tLS0tLi0tLS0tLS0tKy0tLS0tLS0tLy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAAQFBwECAwj/xABLEAABAwICBAgJCAoBBAMBAAABAAIDBBESIQUGMVETIkFhcYGRoQcyUnJzsbLB0RQVIyRCU2KiFjM0Q4KSs8Lh8PFjk6PSNUSDJf/EABsBAAIDAQEBAAAAAAAAAAAAAAQFAgMGAAEH/8QAQREAAQMCAwMHCAgGAgMAAAAAAQACEQMEEiExBUFRE2FxgZGxwQYUIjIzodHwI0NSYnKCwtIVNELh4vEkslNjkv/aAAwDAQACEQMRAD8AL0lglaOevl8Jwt7rF01fUBN5a4DMkAbybKxtMuMBeEwpLEldD8mnoB+8b2F3qCzFrHTn7dulrh3kI4bIviMQoVI/A74Kk3VAGC9v/wBBEF0rphFWtcLtcCN4IIXQ1IQLqTmmCMwrgQc06JVbhyOZKsKuuGW98ifQbcdNP9azm324jSj736U8xLBemfClc2zOIv2DmW6LikAolPHyptJUJrJOnOjqXhHtBc1uI2xuIDW77nmVJqamchmTzK1lGTCcUFBNNic1pIYL25Bu6XHOw5kopUUVOsNJSxcBA3hPKc7itLjtcTtcdmyw2WOSDZ67G4uyu455WFzuCX2N3c1n1HVaWCnlgn1yNCXN1E6iYI0z1B15a0GMa1jpePWjToB5tN865KRD1nEo5k634c7j/u9NeUCV8i5PS71j1qIqzx3ecU7M6jqp3GJOVzfPnySPygY406ZjIE++PgVtfIh7adau0nMhkdDS6ezEO1ZSXISLa53FZVfRg4FbpLQOWbrl7K2WEllcvQsJLKwuXqSSSS5crhlfZRdbXBoJJAA2k5AJzWOQnrHCZYy2+d7jnI5Cs5YUGVarW1DDSRJ4D5+O5YCq8taS0SV3OkZpncHTsLjvt37gOcqSptT3P41RMSfJbnb+I+4FC2qGmTBKC4nD4sg3sP2rbxt6jvVqiZlw0ObctxAXFy3LjAbsxnzrT7brXGx3NpWLQxrmzjAxPJHrAuIMBuRyAEGQYkACwbSvGl9Y4nA+qcmjhA39c6daiKfVakbsZ/Mbrao1apnCxjHZb2bFTCEqvWudsz2Nhjsw2s5zsThtuDcDZnaxWfsam1L+o40q7paJJdVLdTA1PHLgCRMSEyrC2t2AOYIOUBgO6dI5kx0roOSlJlhJsMyNuQ9w3HMb1yi0piaDs3jcUY0tUyppxI0ZOBNjtDm3Dh2g9IKrK4aXAHihxt0AkfBO6Lq+0reqy6YTXolomPSIJLS10alpEg/5EgVG07d7HUjFN4OW4QJkcAdCPiuumq+QyMaHENtcgZXOe07tmSn9WNF0U1gS58jW4ntzDG8a1hsxbRvQtUsLhiF7gZG3rKIPBy4iZwdtMTr/AM7Cn11b1LfYzsOOm9jZOH0SSOJ1OXAjPm1Ao1G1L4ThcHHKc4HNuGY4J1rvRNbwLYmAC5Aa0bS62wDaTZSVDqqwU+B4vI7Nx5+RrTyW38pJ5Cp2SkY6Rsjhcs8XmJuL9NiuOmNKR08eN+Z2NaNrnbhzbzyLHM2xeVbahY2uLGCSSD6TnFxc0TwE4nE79cmp061osqvuasRAGegEQcufuyGqq/T2hXRPwu5b2dbJwG245CFKaE1Nnc0Eng2nMF18R5wOQdicaDc6sreElIc1oLy3ks2wDQNwcR02N9qk9etOSwlscd7usSQbEkmwF+QZZrZXN/eivTsaJaK7mYnviWtGfqt3kxvyMjIA+ikp0LfA+4eDyYMNbOZ6TrGfSN5XCo1GyykufNB7rhCmm9ByRXBFr7D9k7xzHmRxq1wsUTqieRzIy39WXEjzgHZ57Bbb2IT1l0zJUPxhtm3AYzcCbYnbz/xsUdmP2i68qUatRtWkzJzsAaQ/7Aw5FwyxZuaBvByUrttqKDXtYWPdoJJkcTO7hkD70/1I0PHLj4QXDGsA2jjOvfZ0d6kNatBQww4422cCLm5OV7WzPO3sUhqDDanc7ypDboa1o9ZcprStEJmYSLgkX6Np9QSG/wBtVqG3c6jhSY9gLcTsOEBuL0ZidTpqjrayZUsIwjE5riDAmTMZ68E3bo5jadrMIuI2tJ/FYB/vVO6VJBb2deIj3K9JhcEbwfUqf0/o3hKh0YvcSOsBtIOwADrUPJl9S6p3TDm4lj455di1OQz47gjq1VttXo1CYaMTe1sjTXNu7ioKB+IEX+CLNC6EdUNcWuaLWFnDM3Hb3LSn1OmaL8GWm32nAG3Qn+qlMYauMTcU5ht7Z4mlrQCMje5z6lpGVWMsazbaox1RoLobhqSG5wWzmDBbOeGZGiX3td9a9ZUc14Zk3PEzMncdx3xlMJlW6szRhxMdwASS2wyGZ4rs+5QnAZkA25bHPbuCumtjxRuB3f8APcq81X0biq8LhcR4y4b8NwPzEJVsraNC+tq9a5ptaaQxehLcQhxjUicoygSQja13fWlWmyjVLg8x6fpQZG/J2k6niZmIGBA7k/LkO3YteqysvWbRNNHC+QxgO2C3F4x2ZNtyquKo5hp2ggnqv/ntXjDbXFr5zQxgYsMODczEmC06AcyfbP2nc1Lnzeq1p9EuxNLhGcCWmcyeDtxK0WFlJDLQrCSykuXqterYhzSMKLZWqIrqdZa3qQVgnBAdZSlr8TRt2j1pxoLSRinbIb8TJw5S3Y4dmzoCka2nsh+vbgkDuQ7fevomx9qC6b5nXEtLSPxDeD+WeyUhvLXkjy9PUEHo5+1XU1wIBBuCLg7wdhQPrXQyCqaYoy50g2Acrd/NmOxTGpWkeEgwE8ePi/wHxD62/wAKkNN1zoInSMYHODcr7LXzvbM2zNuZYy0FbZW1HW+EPMmnBOEODvUJO4eq7xGoeVSy6tRUBgZOkCSI1y4xI+YUPXTCho2xYgZHAgAb3G7ndAvYb8kx0NoSKKA1NQzGS3E1h2WtxcQ5Sduewc6FamvdNMTK4kki7juuMgOQAFWzX0rXsMfIcrclrWt2LQ7VqVNk0qbHPJfXeX1ntyJALZa05QPSy0IH2cRAX2YbePLgAG0wAwHMCZgnsH+xKjNX5xNCZX4drgWNAAjDSbC/jXtY5nlUPphgi4Osp8s7m2Qc0nCQ62RzsL8oPMtWakuxZykMvnkL2vsyNr8/cn2uRZHStiYNpa1jdps3Cb8+xo6ShqHmLdqU/wCH1MfKvAcwMLGNpEHE10xiyMgxkGkmSZVrnXJtHi5bBY0w7ECS8aERpn2zAyCIoJQ9rXt2OaHDocMQ9aGtY9W5Z34xISbWDTm0DcAM29666xl8VGxrXFrmNiF2kg4mYBkR1qI0Pru4cWcYwMi5lg8dLdh7utBbI2dfMY692a4GHOZBiS0QcsWRDgRIlp4Tuuu7m3xChcjUAznAOfDSI6E00Ax1DUsEowxuDmF175GxvfcHWvfkRtX6Jilex0gvhzA5Hcx8obOzpu0qYqaujOB4d0ZOaeQkHNp6RYqGbT6QpQRG8SRtBdZ4AAaM8sWzoa5EVa52hVbVFUW92wYHNdLARnEEyWug4YOuURCqZSFBhaG8pRdmIhxGmo3iRII035og0loVlQ5plc4sb4sbTZt97sr39Q2ct4rW3R9MIw5xDCBaO1sWWxrW8rfUhyu14qLWxtZ5jRf811ADSL53uc4knynklxJ2cY7BtTXZWwb6lXpC4uQ1tP1WMOk6zLWtE/1OIcXZg8w91f0TSe6nSnFq5wyPDnMbhlBzVlakCYQAPaAy5MZ2OIcSSSPJucj7rKXoq5kheG7Y34COoEHoz7itaWqg4MNjlY4NjAGFzT4rbDIHmQHofTvBVEsm1sgfcc/jRnty6HFIRs+ptareV208LxDmtgiSSdQd7mtMnKX9KONZtmyjTc6QciegdwJHQEcaY0k2KGSUEEt4o3Y72APQSoTRVI6GldU2xTyNxYjm5oIJFue2Z5zbkUXG98tBJfMiZzz14He556kW6GmZNSxkbMDGkDkcxoBHaPUr7mh/CbR7Gel9OGv3YmtY1zWHX0XSScs9OYxp1Bc1muOX0ct5iSQSOcCOiedQGresNMyMiVxEt3lziC4yXNxdwub8me5dNYYhNSNnLcLvHHIRd2R622PTZSzdW6bHwhjBdttnbrbex7FH61zGVzKOPN73AutsY0Z57t/QOcK2leWt7tWnXs2va/GKlR7yIYxoOKIJhpBMlxjJrWgDJU8jWo2jqddzSMJa0NBBcT6sz/VMRA5ySp7R02OOIu2via49bRj73d6idXqDBPUyEbXNaOzE/vLexPKdzW1AibsjprAcwewD1FSIAF+TaT6yVm6td1q2qxghtZoMaQ3Hib7mx0OPW0FMVC2dWH34SPHtCDfCFWeJEDsBe71N96r5pzvyXICmNaa4SzSO8p2EeaARl1XKh2BbF9HzW2o2u9jZd+N/pO7JgJhsGnj5S5+26B+FmQ7XYj2LokksIRaZZSWEly9VzEJtUR3Torm8LGNMFYVDekKdDGlqe7SOXaOkI20gzJCGlDa6ebOruY9r26ggjqQ1ZgcC06FaakaV4KZtzxT9G/zXeKeo27CrN0lCHxOadhBv0HinuJVHxTNEpseKThO7/bq1NF6zQfJ2GZ9nYcDmgFzjbIOsByi2e+60HlPs+rc8je2rSX5NIaCXfaaYHDMExwQezK4t3PoVjAGeeXSO4gKtq68cguN4cOg2P+8yPNXtco+Daye92iwkaMVwNmIbQe2/Mg3WaZkjnvYSAXBzQbA35cr77nqQ7HIRsuOjJPdqNtrpgpXrDmA4RkWkjMZbxmIgjTWFXYWdeDVtHAwS0zoYMg8+RB3EGVclXrlStF2F0h5A0Fo63OGQ6AUJM066WrimkIwtkjOXitYHg2G/K5ugt8r3ZEk9JP8AwpbQ1FUTX4JoAaBic6waG/ZuSOlA7Nt9mWRcKTXSQRidm4zqBAAA6AJ0KLu7K/exr3ubkZgZNHAknU82fMUd616bppYTGyTE64+y8DJzTtIA5CquqKgiR3nO5+U8qmNMaMqIQ1zntc15Ia6N97kbR3qJipi9waNrnAC+8m2aro8hYURb2heAHF0uImSANwAiAMo7dxlvYVLgurXGAgiIbMZEnfmCJ6U8odMvY4Oa8hw2EHC4dBG1GNFro6SMxS2ddpAcLNeMrcZuw9It1oTl1ambUCms3hHC43Zgu223AppV0j4pHRvAxMcWkjPZu3Iqpc0LoBt5TnCcnb2kGcjqOcAweCGOyqlM4rKpqJwnQiYnhzCY/EtNMeOPN96bwVTmeLl3qU0foyWqkEcbMbrc2QG0uO7PapHSOptRFGZOI9rTZxidjtvxAAWty7lVUu38s+rSkAko9ljRFGnbXBbiAAid+n+v9TBt0o7lsf8AfwraLSBuXbxa3OBl/vOm5hG5S+jtWJpoxKzCGkloLnYcxluRFLa1cuAdmELd7CtqbCQcJ4mez5nREeqGloomvExdhkbGQQ3FZzb3JH8S6S1rYDwlHUZOPGjwuty54XjZ1XF9qDNIUE1M/BIC02uLHIjeCCuArJB9vtAK9HmTrh9dznAvAD2EAscAIGJpadABGY95CB8wvm0WsYGuAktcDBEmZBlvXkQi2q16qHXaH4Ty8G0A7vGOY6rIj1EfC1j3vewSufbjOAeW2aeU3ILiekjmVUGU3LuUm/fdd49ISXsST0gb0PUo2dxZvtGxSDiJwMAmDlPGecq2raXVGq2q0F8A+s4ZSN3CM9ytvRNTj0hPuENh0B8Z96kdY6zgqd7htIwjpdkUAajaZZE8yS7HMcw4RexMjSCRe9rNUprtppkoY2J92AF5OY4wyAIOYKVXOw3natu0tcaLGMl+H0SKYJM7gXQMp3qFG/m2eWkcoXGGznLnQ3pidY3aILqicVjyevP/AHqWGrlHt5rrsFK4rOrVHVHakz2rfWFu23oMpN0aAOwarKwsrCoRwSSSSXLlc60ctiuMrliwsKo7SLskEawyWa483ecgi3SUqCtZTdlgdrh15J5s5npCVWAHVGt5wheIeN/vSnr615y7xxeu6aMBHIu0TXEgBpJJsAMySdgAWsbeVmMwNdA5vimJ2dbVH8pUYC7nkjs09yRzzOfQVsGKabqxV+R+cLI1Zq/I/OEOWVCZIKLZdWbRAeIULgRrqI6dkcpFOaiFxDXtGbgS05gWJIIOzm5OUSr4JInlj2C4AJAde18xfnt61tRaYqIbmJ7477cMjm36cIzUWy13+lZXFOvRhhBmNcUdogjmMoy170JTxwQzRNfCZHG8Lybji3Lg0k4SMgfOGxCuhG/Tw+lZ7QW0Rq6t5zfI4C5c+QkgXyGJw3nYnMertYCCGAEG4IeAQRsIPIvXNc44mtyUKVajQpclWqguz1nfprnpvOqseuqqcaUjhNM0yEAibEQ4cRxthtbYCOtVvrez67Uemf7RTmah0jj4ZznF7RfhDMS4AA7Hbdl0OzVb3uLnXLnG5c4kkk7SSdpUqpcciIznd89ao2fToscHMeHQwNMYjnMznoObIcAj7wWFpNVGLCWSE8ETlmL3sfOcD1Hcn+qNDLTU1e+qY5kZjLA2QFuJ2Fw4t9t7hoOzjKsoqt7SHNu0g3BBIIO8EbEQPj0lVRtc97pGHMcJMXAWuL2ccjtXMJgQMxPvUrtjMTy6oGsfhmQZ9HgdM436aqCcMz0qwtEsphodpqBIY+Gz4LBjv/FlbehP9Gqv7v8AOFz0lFWwQiOQuERcbMEhLb7bkWtf4KLGvZJI3Qrbmvb3WFrKokOByOeU6c6763aabVyNLGFsbGhjQ7NxANyXW9WexD5Ys8MfI71vThz3NYGjMgC5sLnZmokucZKvY2jSYGtyA6elcHRrm5iITqxV+R+cLQ6sVfkfnCmGPG5CvurQ/WBQLBY3BIO9uR7CnElS4twudcG9jYA8X8SVVTyRvLHsOLlHvG8Li+5GxX+dV8JYXGDr86qgWFoXCq1gkZggZcxyyPNqndO64TgJnTZJ20pe8ZrRW7pYJWywsrCgiQkkkkuXK5XFMKuWyczOULpCdZGiySsG4wmFfNdQtRQ4zn186kycv95NiS09tR5NoO9aTZtk2kwVHj0j7gdw8ezRRHzUNysDUHUtrWfKZG5uyjB5G7C/pOwc3SoTQWj+Hnji5C7jEcjAMTjzZA9dlckcYAAAsAAABsAGQATS1pycR3d/9kDt665NgoM1dmejh19wjeof5lZuTfSVHFDE+VzcmNJtvOxres2HWiJBnhJrbRxwj7bi93Q3IA9br/wouq/AwlZ2yt/OLhlI6E59AzPuHaqrqaIve5783OLnE85NyufzWNyl0glOa+iBrdAAi7wcautED5C3N8hHU0fFx7EW/MzNy6aqwBlJA38GP/uEv96lU1otimBzL57tGpyl1UcOJHUMh3Ic0rohjYJnW2RSHsjKpc6Kbc5cqv3TptTVHoZf6ZVMuQt2TiHzvWh8nGDkqhPEdyiPmsbla+pOiWOo4rjkeOyR4Vfq09Qz9TZ57/aUbX1+rxCt8oGjzQED+sf9XJx8zM3KE101dY+kks0XYA8fw+N3FyNFyqoBIx7Dse1zT/ECPej3txNIWTt6vJVWVOBB7CvPPzWNyQ0WNtlMOGZusJODK+kloB0ViarwsnpmvcAXN4j/AD2gZ9YLXKVOhGbkLeDetwzPhOx7MQ85nxaXdisRNKD8bASsBtS2FvcuY31TmOYHd1GR1ID1x1MjnixsZ9IwXFtrm7SznN7kc+XKqw+a27l6LVUa7aMEFQSBZsn0g3DETiHU6/UQh7unHpjr8E32BdzNu/pb4jxHWgt2iWnkURNC5ji120d43hFyZaVoxI3Lxm3LfeOtBrTQNyHVlaNK3UVMGUkkklymrXq35Ib0hJmpyvchqtkz7fUs/ZMlwWFpU+VqtpneQD0b/csvkzWuNMuFS4VaFbk55qwPBlDeSWTyYw3re6/qYe1WFiQT4Mm2p5HeVLbqbG0+txRfjTS2EUwsDtqpjvX80DsAn3yu+JVj4RarFV4b+JGxvWbv/uCsfGqe1znvXT8zw3+UYVXeH0B0orydZN05x3NPe3+6ZY0g+2aZcKukLsTg38TR2myXFbVsAiVfNC3BHGzyWMb2NAXXEuLnrGNPIjJfLC4uzKaazS2pJ/ROHbkqdL1aeustqGc/haO2Vg96p7hUuvPXHQtl5ON/4zz97uA+Ke41aHg9kvSW3SuHcw+9VFwqtDwbSXpD6d39ONRtfadRVu3x/wAP8w8UZYllr03xpY0zWIKp7TUYZUTN8mV46g9wCZY071udatnH/ULu11/eofhUldqV9NouDqbXcQD2iUR6p1OGrhO+Rrf5+J71b+JULQVWCRjtz2nsIPuV6F6Nszk4dCy/lIyKlN3EEdh/yXbEg/wlUwMEcts2SYf4Xtv/AGjtRTjUDry3FRTfhDHdj2g910RXbNMhKNmVMF5SP3gO3LxVX40saZcKlwqUr6JCiNIR4ZXDkJuOv/N1yTjSvjg7xbsP+U1C4qtuRIWySwkvFNWVpEoW0i+10T6RQnph1v8AeYpLYesFjLH+bp9PgmXCpcKmfCfhd3JcJ+E9ydQtnIVy+DZ31IHfK89zB7kUY0K+DKJzqBpA/ev/ALUVfJn7k4o+zb0L53tIzeVfxHvSxqk9ap71k5/60nc9wV2fJn7lQ+tDyKyoGE/rpf6hVF56o6U28m/bVPw+KbcKnmhnXniG97B+YKH4T8J7lKasuJq4BhOczB/5AgGjMLV1XRTceY9yvnGljWfkz9yx8mfuTpfMBoh7X+T6jL0M/qNPuVPiVWz4S2ObQvJG1zB3k+5U1wn4XdyXXfrjo8Str5O5Wjvxn/q1POFVn+C6X6tIP+rftY34KpOE/C7uVoeCRrnQz2GyRveHfBQtfaDrVu3s7J3S3vR7jSxpfJn7kvkz9yaLDKndenWr5f4T2taVAcKpnwjEt0jKC07Iv6bENcJ+E9yT1B6bukr6RYn/AItL8DP+oTwS59nrV/xSXAPMF51bJmOK7aN29eiaemfhbl9kepFWf9XV4pD5TaUfz/pW+NRetBvSVHo3nsF/cpT5M/covWmF7aSoJH7p/qsjH+qegrNUPas/EO9UkZUuFTQyZ+K7uWOE/Ce5JYX00kJVzrlvX7lzCUzr2yKTV6VWPWK2SWEl4pqzNIMQvpCAHxunaRycyMquO6HNIQJBZ1cJCwrKjqVQVG6gyhz5PF5Dv53fFbw0cbiGtY9xOwXkN+gA3KkdHQNM8TS0WMsYIIuCC8AghWjQ6MiYeJGxl9uFobfpsM1pbama4mY3JrU8oWNb7LPpEdsA9yjvB9WxwsNJJxHhxey7jZ12tBbe+bgRs5b5bEa4m8/aVWOsWjXNlJIyPKq2qdZa+KSRkdXO1okcA0SvIAxEWAJyHQmrWxhYOYLM1HurOfVdrm49+S9F6W0tTU0Tpp5MDG8pcbk8jWja5x5AM1Q09XFUyPn4MgyPkeWhxJGN5eDtzFiFAB09Q8Olkkld5Uj3PIG4FxNl3NMW8x50XW2cHszdnuO757FXYbZNnXLmtDgRBEwddxzgqU4KHyD2u+K3iqGU7hM1vHYQ5gc5wu5pBFxfZcKKM8vl+v4rm2nc+7vVkELR2QcUvdlzfOScXnlbTNIto0iCREuIgTzCZ7R4H0hoTTdNVxCaF+JptcYjiY62bHi+Th/kXCf42c/aV5moXyRuxRvfG7ZiY5zHdoN0QRaXrZBhdUzEbuEfn02OaKfawcjks0y5kZhHvhQ0zBwQpAccjnhzwHG8bANptscTbLdc7r1o6miGWF3McTyPWpn5nkawPLcimWm4cNO9wyIAsR4w4w2FB3VoHDEDmB2/D3p9sjbJtvonslpM5ajQdenNnvTEQRHYx3a74o/8GtfDTl8UnF4XCQ4uIGJtxhJJyuDl0c6EtTqR0sTftEucL2z271O12i3xOs4daHoW+E4yUXtPa/nDDRYyBOZOZMcNw6ZPDJW1ibz9pXKqq4Y2GSR4Yxou5znENA5ySvPen9O1kE2CGpmjbgbxWyODeXY29gm9Kyrq3NEkskpNsPCPc8AnIWxGw6kdQp8q4jgs/XPJMa7WdFLac0tBW1U0wjcA5wawOLwXsa1rWm18icF7clwmPAxeQe13xTf5BF96Otj8+xpsE4c2V1mgsyvYsLQTffc3cg6lpSqOmlUHWR3p7s/ylDKIp1ac4QACwg5DSR0b5z4DenxRNGItcRa4Ac+5scg3NXdqlp6Grp2PbxXhjRLHiOJjwLOFuVt72dyjrCqOLVqpLOG4N5bvA5OkJlVY443vY5zHNaSHNJa4HmcMwiqVm2kwnFJ93x7exA7R2s+9qNBp4WjTjnGZOQ4ZDtK9CY2c/afihvXnSkLKeSG95JG4Q3Ebhp2udnkLXtvPWqp1N05XzOex1TO+wbYGRxOZPLe6I6/RMkdi4HPO/PzlViHNQxBpv5xHx3oQlpY2m2E5ne747eZacDF5B7XfFT8kAvawOzaq+iiGeQS+rQwb1srDa3nQM04Iic8s+GXMpeqkjIwsHLcm5PIRYXK4hc42rqh3JszispJJKKtVvzNUHpGJEDworSDVk6DoKwjhkh/Rsf1qD00XtNVt0rON1FVXo8fWoPTR+0FbFL43UVtdlGaJ6fAJfX1XaakY8WcARzrz3pvR7PldQAMhPL2CRwXosKhtKN+t1Hppv6pTNp+npfjavB7CsfuO7ly0fRBuwKRkomOHGC608eSY6SrL8RvWVpYxmFl8qbZKj6mCO9mjLenVHT8y3o6MnMjoU5Q0KkXNYICqa11Qy5cKbQrH7W9JRDo7QsTbWaF3pIABZS1LCl9V4JlM6bIELrTUYIsRcKJ120FCKGd4ZYhrfbaiimYmGvTf/wCdU+Y3+o1Lrh3oHoPcmNs36RvSO9RHgso2Cha4NF8cmf8AEiyooY3izmgob8GH7A30kntIsQ1EzTb0BFXHtn9J7yqN8J2jY2V1mtsODjPbiUhoGJjHRnZxS/8A7cZf/atfCqPr/wD+Uf8AcmWiZZDIxwAIa21nC7S1zMDmkct2kjrROzQXVa4HAdxVG03BlCg6N/wPdKKNGaMopKVjXsjBwuDnE2kEvCFrABfxbWN7bNuadM1c0Y7hXRMLhFYODTIRdxdhzLXHxRt2XtmmkNHA4ZwhvmvkHtucF2ZoSF2wuYenH3cT1pSdnXVNoaabXACNRw5xxzWeFKrhDcLHQI1IOQjKWgDPNctMattiiL2O412RgYQCJHNcXNuDcACxHSt9b9GQmCofhzwvN+m5XYaHeHMJnxNa9ji0sw4i0g7A5wuQLXO9dtYo/qk/onepF2Fu6kyoXMw5aTO455Iyxpcm4ANwy4ZSDodcieMdSgPA1SM4Wo4oyay38zlac1Kxws4AhVp4HB9LU+az2nK0VG1M0mn51K0F6Iru6u4IdrNAU+K+Befo25npK9L1Xjdi82sGZ6SqrzQdfgnPk82XVPy/qW7QtlhZS9a0JJJJLlNXG5RtfsUm5RlfsWQo6rBu0UNQftUHpme0Fa1N43UVVNB+1QemZ7QVrU3jLb7I9ienwCXV/WTwKi9ID63Uemm/quV5gqidNOInqCPvpv6rkyHt6I++1c3+Xrn/ANbu5b1tZYYW7fUuejaIuOI7PWuVBSF5udnKUTUlOABllyLUvcGCAskxpqHEdFmko1LxQgZDrTaM26U7gQbiSjmgBPKZik4clHwlOI33Q7hKvaYUvTOummvH/wAdUeY322pxSlNddHfUajzW+21AXI9B3Qe5MLQ/SN6R3ph4NP2FvpJfaRUhXwbfsLfSSe0iq6Ho+zb0DuRFz7Z/4j3lU94UWE15sLng48hn5SbUGkoI2gYjkByHby8ik/CBXyw6RMkRaH8FGBibibni2hBMJLybkucXOLjYAEkkmwGwXKhbPuW1qnm7cRynm4bxvRNelbVLen5y/CM4MgZzpmD7kZx6w0/K4jqPwT6LWmkH2z/Kfgglujid3eukeiXHIEdqJNbaZ+pHYf3IQW2yx9ee0fsRxHrXRcsh/ld8Fy01rPRyU80bJCXOjcGjC4XJGQvZDEWrErtjmdp+C3qdU5443SOLMLGlxsXXsN3FVL69/BxUxHz95XU7bZ2IFtUzIjMfsRB4Hx9LU+az2nKz1WPgi/W1Ho2e05WddV2nsW9feV7ffzDuruCaVHjdi82t2npK9JVHjdi83EWcR+J3rVd5/T1+Cc+TnrVfy/qW6wsrCXrXBJJJJcuVyuUXXqUcouvWQo6rCO0UNQ/tUHpo/aarWp9qqmj/AGmD00XttVqw7Vt9kexPT4BL6/rLpV1TImOkkdhYwFznG+TRmTkqO0lVxPmmcJG2dLI4HF9l0jiDboIV0aYpDNBLCCAZGObc5gXHKFWldqBUMdZgEgtfE3IdGaLrGq2ox1Ns4TPWOOYV1sKDqdRlV0YgW9RGuhz1/umFNpKmaABK3tKeDT1MP3re0rj+g9T9ye1qwdSKnL6E587Vcdp3x+rb2H96pGzNnj613aP2J1Fp6l5ZW9p+CeR6yUY/fN/N8FFfoRU/cntal+hFV9ye1q8O0b4/Vjs/yUhs2wH1ru0fsU0NaaP75v5vgnMOtlANs7fzfBDn6D1P3J7WrDNSak2+hOYB2t2FRN/en6sfP5l7/D7AfWu7R+xGcOumjh/9hvY7/wBU31m1voJaWWKOoa57gABxhezgdpFuRCv6EVP3J7WrP6EVP3J7W/FU1Li7e0g0xn8/aV1O2sqbg4VDkQez8qMPBlpGF1MYWvBkY573NF7hrncU32IyugvUPVmSlc+WSwL24MFsxZwNydnIjG6voBwpgOEEZdiGuiw1XFhkHPrOZVT+Ev8Abj6OP+5RWjqIDPmHqUv4R/24+jj/ALk2EwjYN5aLDqROyCfOa4H3fFU7XA80oE/eW7mAZcqkdG0V030ZSFxxHaUYaLogLJxWqYRCS0mFxlZoNH25FvrDR2pJzuiefylTtNAm2tUf1Kq9DJ7BSutVMFM6FOHN6QgPwT/rajzGe05WVdVt4LP1tR5jPacrGul1l7BvX3lMtofzLuruC4z+N2LzjMOO7z3esr0bL43YvOtWPpX+cfaKheaN6038nT6dT8v6lqsLKwl614SSSSXLlcjlGV5Uk8qI0g5ZGiM1g3aKJpD9Zh9NF/UarWj2qpaN31mH00X9RqtkFbbZA+iPT4ICvqupcuMs4AJXCpqQAhes060Db+8eOzFb3Jm4wJKFe4NElEDdKANv+MjtJPqTY6Xbgiu7PG4G25pcwe03sQGyvkEUbXeMSXO6QXk36nLSCqc5jX3I4rD2z3PchjcBBG8BIA5vAo6dp0fSkHYH26eA4UexbrW0Wm2mS19rGO7Q8f8AqVWsszgx5BzcAf8AxAH1kJ7NIQThO1lgfMGzuURcZ5qtt8J+dM0fM080wucDZ3BFwvvIy77Lo7Sga525jXD+R8Q/uKr2nqDwZ80Hq4QtPuTubSBF3bcRPttv7A7VMXAPuVwu2xnwHvlWHFXXlwXz4/c97f7FI3Vaav6WPytrnk2e+S19zsTh3ydyscFXscHCQiaNQVBiHFdLpXWl0rqatVYeEIfXT5kf9yYaLpTI/E7ZYAdQHcn+v/7a7zI/U5NqXSzWADCcucciosLulb3NflHRMR1Iu/s6tza0BTbMSTp4lFuj4gFP0QQDBrM0bWOPWFIw68Rt/dP7WoyptC1OlQIKns27brTPaPirFgKa61fsVV6CT2ChGLwiQj9zJ2sXLS+v8M0EsQikBkjcwEltgXAi5sUFUu6BaYeEZSsbgOEs38yYeDD9bP5jPacrDuq88Gn62f0bfacrAuo2PsG9feVPaH8y/q7gtZNq88V4+mk893tFehnbV570n+ul893tFRvNAmvk77R/QPFcVhJZS5a+VhJZSXL1XBLsUHpEqclCiq2G6ydAwVg3aKCcLFrhfFcuBJuAWm4I7Annz9VffO7T8Vxmp3bz1Gy4/J37z2laOleU2NAEhZm62Vd1qrnitAJyEuyHDLJOJNLTuyMhPSmLmg777+U779/auvyd3P2lL5O7n7SrPPqfOhv4Hd/+UdeI94Wrn3NzvJ6yCPgtQBa3MBllsILfUe1dPkzuftWPkruftXee0udcdiXn/kb7/wBq0IbkLHK3qsUj6v8AF/f2rf5M7choVU/ln8vwTGxpeeYuTPqxM888J4IO52dc28Yntznjuji0cUQ4Rs5Pdnl2m6yNlv8Ab3BPqPah75ZP5fcz4JfK5/K7h8Ed/CK3Edp/ahuSr/aHz1IhGEEEcnLlfk+CkRp2q++d2/5Qd8tl3/lHwWDXzb/yt+C7+FVx/UO0/BdyNxufHQSO5GXz7VffP7f8rd+nZ7n6Z+RIyceQ9KBjpKfeP5An+g697pSH22E7LG92+668NlVpAucZ6z4hNdkteyqRWOKRAkk59fzu3qdqqsSOxSEvdYDESSbDYL9ZXH6PyR3pxwyXDIctad3ctOHuAgEwm/0fkjvS+j8kd6ccMlwy7A3gOwLuUf8AaPaU3+j8kd6X0fkjvTjhkuGXYG8B2Bdyj/tHtKVJXmIkxOLCbXs4i4Gy9jzlOxpyoN7TvybfNxPKPimnDIQqdNyCR+ENw3cBiF8r5cq8dk2Bkqa9pVu6b204xRkTlnuzzKN/n2q++f2/5Qtp+MY2u5ZOM47yXOxEdnrTNmm5PIZ2f5WtTVmQ3IGywts27um6EfPEq7yb2HtGzvOWrvBZhIIDnGZ0yIjVcwsrAWVUvoaSSSS5eq43JlUJJLHsWEKj5FzSSRY0UFhZSSU1yS1SSXLwpFBISSWz8k9K35P1pDtrWn+b9KSwUklr0kWCtXJJLwr0Lg9OdEfrR0f2pJIS49m7oPcirb2rekd6nitSkkkIWjWCuZSSXjlZS3rQrUpJKCuC1KFuU9aSSqemuz9XdXiusacNWEkK5aCjoupSSSUEUkkkkuXq/9k="/>
      <h1>Welcome to BuyAPokemon.com</h1>
    <div className="main-container">
      <div className='add-items-box'>
        <input className='add-item-input' placeholder></input>
      </div>
<div className='item-list'>
  {items.map((item, index)=> (
 <div className='item-container'>
    <div className='item-name'>
      {
      }
      {item.isSelected ? (
      <>
      <span className='completed'>{item.itemName}</span>
      </>
      ) : (
        <>
        <span>{item.itemName}</span>
        </>
      )}
      </div>
    <div className='quantity'>
      <button>
      </button>
      <span>{item.quantity}</span>
      <button>
      </button>
  </div>
  </div>
  ))}
  </div>
  <div className='total'>Total: 4</div>
  </div>
</div>
  );
};

export default App;