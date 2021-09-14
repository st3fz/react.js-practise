import React from "react";

import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';

interface Props {};

interface State {
    sliderImageData: {
        images: string[];
        index: number
        },
    isVisible: boolean
};

export default class DisplayPicture extends React.Component<Props, State> {
    
    private imageRef: React.RefObject<HTMLInputElement>;
    constructor(props: Props){
        super(props);
        this.state = {
            sliderImageData : {
                images: [
                    "https://i.pinimg.com/originals/73/86/bc/7386bc1881e6c6499cccf45638181ffd.png",
                    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
                    "https://i.imgflip.com/208jgb.jpg",
                    "https://inspirationfeed.com/wp-content/uploads/2020/09/Motivational-Memes93.jpg",
                    "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhIZFRgaFRgYGBkYGBgYGBgaGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQhISE0MTE0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0MTQ0NDQ0NDQ0NDE0NDQ0MT8/NDE0MT8/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAAFBgIBBwj/xABJEAACAQMCAwYDBQUCCgsBAAABAgADBBESIQUxQQYTIlFhcTKBkRRCobHBFSNygvBi0QckMzVEUqKz4fFDU3OEkqOksrTCxBb/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAIDAQEAAwEBAAAAAAAAAQIREiExA0ETIlFhBP/aAAwDAQACEQMRAD8A2rGBqQrQDxJrhonUqsEq1RTzTokiq4ZcphFdjo5kBXVvPEczC8HpK73Fu/wXFscj1XNOqc+ZSpSH8kCnaruO8Q0g1Ehq+e5RWRqjkLrI05AXA3JJwOp6xi8sLiijO9FdCjLFH1si4yWZSq+EddJOPbeWj1BU4qnUUKLov9l3VXqH5q1IfIxnhG9biQO4+0IMehs7eMcZXz2/4Rc1KdOvpHdVWpLTw66ia7qlMkdAS658hOKvZFqbFaqhX0hh4gwKkkcx1yJraH+aeG/9pwv/AH9GA/wi33dVlPnQA+jt/fA9anTNWPZ64t6Ju0Qdz3XfnxgsKejXq0eenfE1Pf16Nv8AaKtDFJaYqMwdSwUgHOjzweWZecOoipw6hQOP3titPfl4qABGOuxP0ge21Rf2beqvKnQZP/LVh+DCB8YHouCocWu2nV/lEzjGeXnK+0uLi5p95bUQyZwrM6pk4BO25wM49wZY9rLI1bSlpvPsunS5Ot07wCkw7vKuh3yDzPw8jAdjbgUbCy6d/VOPas1Wqq/JcD5QGmXtat9c1atGmoV6TYcGoBjDsnhbG+6n8JoOB8QVKRrGixQOtOpUZk1K5dUYFc5Ol2wfY8+rXZ+lp4rxBehSg6+zrv8A7YeO8W4elO3qAAaKl3RqEdP3lxRL5921H5w2LNl14pWr6/s1AOqNoLu4QatCv4VIJIw677Sk4rw+qSi3PeFnYrTRCrB3A1aAA2xwGOo4ACkkgDM0tTuxdUGpsVZ3cOqu+hwKLYLIDpLDSvixnwgZlfSqBuJMpLMy120hnYqi/YaWyITpXd3JIAJ1GPkOLI8T7H16Qeq1FTTUZISpqdVAyxZdI2A3OksfQz227Ns90FVNaogdhqVSRnAAJ57zecH3ueJA7jv6Qx6GyoTM2rL3VtUDlXxaDKO6EhnpBlfQQGU5OzZEm3StbaqtxKpb0lLWjBFNOmNNSmxy7rTXYkbamXPpmFv+MvQpvVq2zLTRSzsHRiFG7ELnfbpK/tSimogZn2FNlUO6oWF1S3ZFIViNsagcdIH/AAgKFptUaorKtCopt2d170sVwQquFYjfZlYb9IyWd3xllX95RamGR2VtStnSuojCnIOnP0gOz1Z6SUqb0SneliralYFijVMEA5HhVvpBdpVzTtweq1B/6d483+gfx/8A5KsZaOXd8yuESkajFS5wyqFUEDmx3JJ6eUTpcbZqj0VtnNRArVFLoAqv8DBs+LOGHpoPplr/AEv/ALuf94JxbogqG5HOvTt0+SmowP0qn6RGpn4g9eu1NLdi9BkNVS6ADWutNLZ8WRv6S+sr8s7U3pmm6IjkFlYFahdVIKnnmm23tKXs/wD5x4n/ABWf/wAeF7LUwj1KfeC4ZadItXDu5bLVRoYu74KlS2AQP3nIdQpNNNJJJA0kkkgGLcwLmdmCcyE1wxksrpKVxTd2CoFqAsc4BZRgHHngzhzBkyk7e29+qXZrjLUzXqZZVJOhkC6lAGWAYLy6A4zylhU43a0Bd1Eukr1K7h1p0yGZWFCnSVWCk4GaeSzYAz6b1ky3a25YaVU8zCHMmp4Nxa0qWVtbVbunb1LZ7ct3hC6vs1RHBQsQGDBBuCdOrcZGIv2qRL6uGQk06aBFbBGtizMxUHmg8IDdTnG2Cajs9w0ABiNzvvNIvlGLkNacZRKfDVD/AOTCLcDS2aai0qKde22Kmge8W4xxRKtnxFAxL1XqCimlg1Re6pohQEbg6DgxumY2qjGSIHyA4y1leUaKPdFDTKuNABOoIyFWDow+8fWShx2lb21nSQLWKG3p1Mhh3SBNL1jttpx+MXvb9UG3y8/lFrCoargvjPRSc/MmTllqKx7W9Di1uL6pXFZdD2tFNWGwXSpWJGcYzpddpVUuMBuGUqNRtNyq26MhB1k06qeLl1VdX1lrUXbzx5bROomf+HL5zG/a/kbz4z9pTh92qXFGpUfSqs+pjnA1U2Az5ZO3zni8RVb+pcr46X2gEsoLEobSnTZ0UDLaXG4G+FbGTsWRbee067pQZOOeUml35y2m/wBsW1E3dWncpcVK7q60qZDMrLQSiqtgnAJp5LMFAzvyzMrSUIlJM7U3t9R35JUplj7AKT8pY3u0qnJA1e+PTzzHlnbYWOHGX/q27YcVp1a9BqVUMiFNZXJAxXpvv8lY/KH7a3drcUnq0r398ltWWmlPQ3eMy6ghDKTuVA8JB3mdZuWeZ3hgd/LaXPom/Of61PGeJ2taium8C1Kasyqmli7Gky6SrKc51dMHPWHq8SoVKNLRdFatEB1FNQxL90yFGVlOx1nYYOesylFsnA5CWdhcMhDByDLme0X56aqpdhK6VKvgDW+M6WIDalLLkA459ZRW3FCKNirB1KV/34KPmnSSnWVHfbwgt3WCf9YTScN4kHA1EZxj3j90+EJ9JUu2d6ZHgl/TW+v6rMRTqta922ltL6KOh9JxvhtjLTs0AhNGnUarRSmmlmVVKnLLp1Kqg+EKd8n13jvAlOgsfvMT+MtJVKXb2SSSI0kkkgGIYQFSMNF6hkIoLTlJ6xkpyomvHEzvGrPU6n1E0TGI3ChjvDek26M2agKMeUaIgbdMCHWBwekIC7vyoIxtjaOUVlZxpgCoxzO0FxSixq1nzqwD59PaajhXDVopgbsfiPUxuyphUzgcoakhO5mP0y26PnAnpzhkAjrJOSgHOZabbV7pE6lTEs6i52iNaliFOKy6OVz6xCvzx6ywrLv85X1Rkj3zJiqTrNhj8vl7TqpU3wPKc3QyTF0ySPfEuVFiwojAzGte2YqG8OPWNW58J9xL2nQ9hfYb+vOamhxfvF0nY9JitGD9fz2h0rEEHlg9JWOWqnLDlH0zh9PSij0jIlZwS8FSmDncSzE2Ya109kkkgEkkkgGGcwLQjGAcyEVwwngbEjGcNKTXTecUG5+cYdtounOKsbd08h2hVgVhkxHGsN0IlxSlllxzztmMtcKuMf0fKc0rV3qKXQqmcgNvn5dIsrrtphLlVilLYL5DeNU0wJ0ibz0znvbqx6eKMQVWEY7RZ3iUG++0WqLPXqbxd6kNKhW4pyvq0t5aO0SqtJ0tUXKbwaU8Yll3WTCvbCOIqtRSMCNopAAjFK2GYVKUogimSf66QLxxl3gKiw2NLnspe6X0nkwx85uBPmXCyRUXHnPpFucqM+U6MbuObOdjSSSSkpJJJAMD0gYfpANJ0zrwzx8Tl2nmYyDq8pxbDee1jOrYResv00s6ZCQcc5FEPTEcak7S2ZGNRjnQp0r01HYZ+sdo8Taop1bFTjI6kwl6v7tgPLMrQQgRAdyQT6luk5M8suWnqf8Anwxvx3rtq6G4B9JHOIZUCqAfKJXD56y74xhetdARF7reeXKcyDK41gx0k4bpJXMTj1MwQeLFzyOxnBqHzgvRipUgVGYMvIKkkxkUCdnEAKk9DiOFo0CJ7kRbXOWeGxxMMRFSd8T3XJSXVGVmhuG0zr+Yx9RPotL4R7CYvg1HVUxjlgzbqMCdGHjk+nrqSSSWhJJJIBgGIEAzYgr+7C8olTrM8TOw075nqwS7QixVFDqmMWyxWpzjtvtCIx7plYemsAkapiNtrocLkb/1vmVdlaa7xeoUa/Tbl+UtkjHC7XSXY88aQfTc/rMcsf7bdfx+1xws/a7vqvlKO/vCikkH5TQuB1EQu1U9MybFysO/EXckopfG50q5A9ziI0+OU3OCdDcszQ3+pFfu/AzKcehxt6T5nd0HDEurKSPh04JbPP2jmONnoueUutN+lzkbnPkYQMCM5lH2WLuhDb6SAT6zUtZhFzIssaY5bIO2041zquQYq5HnJUYFSdrUiocTtSIAz3kmYIGdKYGKI9YU+sWppLK3p7GVjN1nnel52Zt/if5CaIRPh1EU6ar6DPuY3mdM1OnHbuup5OHqgczBm4HSFykIxJFu/wDWSHKf6HyYAsfFLO2TaMm2U9J6QAMCNnaWengznOIVjBsYr4jLyhLuY7Ti1uuTH9EInDx3TjlMRSmsbpiNqYQR+1PhPltEqccofCfeTl40+XryoYjcco67ACJ1qwmVdMlU9xTbyzETw125KF/WXT1xBJfAEAb5OAPMyZdL7Sx4aEG+OeTtiTii7S5VNt5VX6ZEre0ydsxXOJXCvpOQRj1j/EafOZviFuX3HPBGk/CfWLGRd3O16l4hG6D5bzpdPMZmEtHqUjkNo2+DnrPt+s1nDuJKdKuoR2HIbiPLHQxzuXsWimMIkCKY6SytqeRM9KyunlIbzQcHtdRBPLMqVRUxqYDPU7S+tqy6MIQfUS8bqsc92dLK7ufKBSu2OcrtWTvGdeBDlbbYwhhmLQ1NBFKdSHpuJEt32NGe6Ek87wSSuhpkGi7mHaLvOlzhQbmdmCeKpyEtOcsQZX2gj4EIePgqRpBF6QjKxrGpxoPhfnF0E7uVKpkjG8nO9NvlNUtcV5V17j1nV3U5yor1JzbduMGrXHrPeG1VR+8cZwvh94jnfeWtFMjHOGhvsz+3Q66lI57+fzgjehttpU3dsFclNiRuOkraVzVD4bGnPIDf84Sq1FlXbLYI3/SK3NiTuBDFi7hiMbYlrSUEYlSotZipw5T039QIrW4OchhsfSbCrRA5CKkekWz8Vdu7AAEb+cvuFb7nbzMAKAY8p7dlkTQmzPtnyXqf0+cC1MrojxCvrcnPhBwuPTbMtuCVsAsQQvIZ6+sTteHDw6ycD7o5n3PSWb9MAADYACRjO90vv9cOPHD8PUK4zmMPXErKdNvKeMxBl2zTk1elmtSHp1JXo/rCrVAkWme1z2IfavT8ZItmrXgiIw6wTidzmKuYBzD1Yu0VZ53w3aCWCYiFvsI5TMcnSsYYURinAJ5k4HUyn4x2lo0wURyW5FgRt5xW6bY4XJbXHaOnQJApmq45lcaV+ZlZU7dISVeiyg/eBVhjzxnMyjcVpn/pHQ+wLH+0SRj8IF7qmRs/eZyfGUT5agAJllk6sPnI1z3SVEDowZTy5/iDuPnK6rUA9Zkv2v3bEoSin7pBKE+jRmy4wKr6ThGP3T19j1mfGteUi1qXD5yDjHnLWw4jgeIb+YiQsTjP6QRt2O+rTjyEVlOaqyxuzFxvyGd/pAogBzK7LDY7+o5ztKxzsdusQyixY7gxunUiKDaEV8SjkWAq5G8Gw3i6vGLY6j5f1zhOyymofsLYsRttH6nDlpguTrbGxbko8gJi07TMK2umc0BlAfNgfESfpj2M2V/c6qakffCn21by7JJ25fpldWRVWaZYnfeXdrZ6ukljw7b5S4s6QExt3U4Y8Zu+vEs1A5RK44aCeUuHE5XnvHqL3+s5ccOK8ogMg4M2NZAZl+IqA+0i72V1pxgTyC1T2Gql45gHMK0BUM73PStQ7wSc5253nNMbxVjl3VjRXaNUl35QNHYYgOJ8SWipLHGFy2/IdPnC9OjCbL8cq+FgzhKSjxsTzP8Aq+20wdzx+3DeCm1Tfm2N/wCTcY9cyp41xapdvpBIpg7DofU+Zm27HdkFKq9RQfIHr7+cVby6nSssuJVapHd8OXHL+0B6HEvfsN06gCzKfML+Izmb63tkQAKgAxyA2nbGZ2Snyr5vc9mLlwWekG2xpwCR/wAJkuK8F7r7rUyDkD+1zGmfcHiHELNKqFXQMMEbjcex5iEh8nzrs32l14o1fC42BPJx0385e16g6f17TOdoux708vT1VE54B8aeszScVr0jpZyy+vMennC47Vjnpu9jBVqePEJnrXtIh+I4PqI6eM02GDUHy/CZ8LG0zxq/t7gFZ33soaV0mSA/LnsfpLezdTzbI/lH5w40XOG0BJ23lraWKurK52IIbHPB6RWieiLoHUkgk+2CZeWoCL8vr7zTHFhnnfGeTs5QtmV8F6IYa0Y8jvoce2/1mhvfE6L6jlywBtMh2t4kzsKAYqHz74HrGuzHGNSqlT46RCMT1HJH9c7D5x/SbZat0+m29Hwj2hFTEBa3GQMxsOJM4WHbQng8Qr84NlmWU/xU8Dq8pluJqwea4LK3iVsGBOJn3D9ZjMkc+zekkORcSzg+UXqZ8pa6QZ4aQ8p37YcFE1Ik8oe3okHOJbpQHlCCmPKK0v4u1bVqCmhdhy/GfNO3HFCzLTU/EQW6nxcs/UTZdrOJYdKCbk7n00jUfyx858yVTWucjfx7/I/pCXbbjxjU9leAgshZdjgz61a0QigAYwJneA2uNJ22Aml1RZFI6LQbSM0GrRGjCAdsc40rDzitWsM4xAE6lUcunWZjtB2VSsC6DS+M+jfKaepahskGIpqU6SQRAu3xa9s2RirKQRsVxvBpRKEsR8I29zy/Obnt5w1hisgGcgOMdDyYHz/vmeakoSnjcHOrHR99jK2qSVV27upBVjk7+eZt+AgVkyGw6ncH8/wmetqQLY088j1B846b7uETSPE7k/yrz/MSbNrk02tgHVgrfWXgqbFeuJScE4gKyDPxYyPWd8buCiB+XnCIy9UnaRsVUJ6A7+//ACi9tb60eqmS9NlYhebpqByR6HB+Upb7iTvU1MScDbyxLHsvxJre6p5GVdgpB3yrnH6iNXkfZbBtaIwOcojfUDMfUzqjaIq6VUADOAOQyc7fMwq0QJhfhd7RyLb5hladlJ5oinzsp2x0BB16eRDqICvWxNM8dYpl7IfZvSSF+1CSc+mm1KQBOdQi4f1nIqTbmOJ3VIXAGScAbkxdKk5vXHdVN/uGOZbLj2+UVr56t0zkkglhy2AOQP0j3ZXhYNV2xyY4+Up1fS4OeuB0zsec13YRyzup8tQ/X9ZpKeU6bbhtLAAliTF7dYdxC1nK4cwZO07cTg8ojD1458hyitxTLAsp38oWqM9YsahWMFqd5p2baeX7ZAdfnGbh6b41pv5g4gFpU/uu+ORVtx+UAq78pUpNq3XGD5jPUT5vxXhL24bB1033Gdx6EjoZ9JqcHdA+h+8VuQ+8N9xjrKu8t9SFGUjYjBG4xARkrCnlkamhKNhdt2Rs76uuOUPxBDUrFVGynQmn0+L5bD6SierVosQjFMNnb9ZpOx766yHHmWG+3r7So0lW/ByaaIfJ2H0JUiE7X3QakQp3On8TvFe0Ja3d0Q5VgaqA/dPNvluZiK987nLMTnpCRFvZq52VT5HBx1z/AMpc8B0m4os5wi1EJz5k7D6mZ6u5KHHTEYoXOBT8zUT8GEejtfqNMY25GdRG0uB3ab/cQ/7IgqtYk7MRFllpGtrSeASoe7dfvZib8YcbD8pM+kpaXPELjQhbymeN8XOSZ1fXLuoDbSsAIMnL+3g8Wf2iSV2v1kk/x0beSASaxIGmdxrpmUQmAuUJRwDuVMYzPAB165kyWVW5Xx+tQYOWLDAb6mW3ZriBo3CPghWcKTnIwx05/OI8VIV3BGAGOJVGsBydhz2/IidOPjLJ+gbccv65w9SZrsPxxbmiMnxphXHU+TY8ppakdjLwNxB42hTOIjCKCJ3FDI2jxngEYUotDmNW9l5jMtKdHM6uXVFzAqRqoqLqYhAOczVxxRHc4XIzjOI1xmo1SmWwcahpG++8QtqLgb0yB/DtHRC3EeGUKykGmM4OCBg/WJ8KH2VWY0ydOkZGPEhONOr7uNuhl33nTl74gLpM03CJrODsN8npnoYj2pu1lRWuKeCCDTKn+ceEfiJ8/uKbISGBXDNjmORI/SaqpaXDd2K1m4IK4dSzZAIOHUbHljJl12g4RUrW7fu8suHQg+PbGVI8sCXKHzzX4SM+pheGoXqoOX7xMZ95pLbsJUenrWoNXRSNvblzlBaFqblsaWQnwnzG0N9lX6Jpg4UeSKPooE7yZl+wfaA3NHS/x09ifME7fnNTFrZVwywTUxGJywBiuMJX3lbHSZi84vpO6mbJ6a+UQveErV2Cg+scxNk/2+skt/8A+LHmv4ySiMOZyHnRgy2Okmdn2Kj5g+Jvops2cZ2lbxXiy0CigAu7YGeQ95W8b4qXRAxCbkkDmfI/nM7JtrjKyHaQHvG08j4veP8AAeB0q3Dr25fUKlBlCEMQoDBSdQ6/EYnfujjK5ONjmWXBuL0qXD722bVrrlTTwuV2Cg6m6cjLxpZRr+wHZmlptLim1RTVtqxrEOCDUp1KaLgMCAMmpt/dNJQoOTSV675ejXqvgICRTemqhfD4c69+fLpzmE7Ndu6Fpw5KDajXp1CVwnh0NcCo3i5fCW29MTX8O7RUbuv39AO9OnRegy6dLg1XV2YIxGQO7T/xbcsS+md2cS2qOzLTqsM2i16WsIxFR9QCudIygKrywd235YWuKhp1CjPXYBaTHStMYDrU15YrgEME2577Z3hKlxVQs1Km2VtUo0ixVSz02LZcavChyB1Ozbcs9cRqGqarKjLqVAqtp1EoDnkxHXziuh29vQUqsiuxAdKbM+g+Kq9IIyBQNlDtkHmcQNy6rVWileoH+0pRZX0sWRqauXQ6QFO+Oo+LbOMEu6hdncIRmtSqKraQW7rujjYkDJQj5zq5v8tlUqsPtSV/EEAVVQK6INeTgrq8iXOMwmh27tPFcvRL11AGF1CmGypfL7pujBV0kZ+FuUQof4w6q7utIq9UE6dehFX4yBpzrfOw5YEPRuVS577TVZSWJ16C4L68Ivi+BdQwOmo+sW4exprlqZc/ZnpBfDpLPo8LHUML4AMjPMw6Albh7s15RpuxahTpvQBCnWzo7ANtuCU0jGI1St/8Ya37xtIraQfDr0/ZlqYzpx8RPTlAVeIMtSpWp0mV3pWaacoFzQrVGqLnVyKVNIMIl1i5a40PpNXUF8OvH2ZaecasfEPOPoB2th3tBHL1A7pWbWFplFNNsKHGnkfLIzg8oHifDDToV64Z9NOxFdD4ArVQlVnVsKMrhae39qcgs1ClQKuoVaoqAvpR9bZUMEbxjBbIIxvO+J3jPRuaYRwKnDxQQEroFXTWViQGOB46fiA3x6Q6BniXDjTRwlVy9MUmZm0FXFRyrAJp8OACRvzxnO+eeI8LekzHvH0G4tadM4T4K1REqAnG7Al8HbAK7HmfL3iorJUKU311FpKyOFCoKbFmw2rxkgkDHXGcb49v+KvUUq1N8C8oVafw57qnUpO4bxbNqWpgeWn5HQ7LXtDRXNNO8Ud7QQlwoLCpVRXemQoBGliM77gzN9rOydBayOyPTpPdha9dawqnSEZivcomUZiBggHHUbzR8U01XdtLujlGdKpUgqjqWpINRARlDDB2y/vOWemi00t6b06aXYuCNKoKahNOimNRDHJz5Yz6ZXQ7A7OcKt6PdV7TUtKs1xSKMzNnumcJUUsAy5FNsqfNeWDnSGp6ymN3UZg71GfD1NCsEUIrucHSijLacDJJxvvuckN+xOwBEm3tUxulqXnPexWjdK3PwzpKyE5LHH8J6c/74d0qcQZ/X0h/szsMLhB59TA07ynnCnA5cm3Plyhf2jTHN+QzgA7dPLzlSE5/ZJ/61p7PP2onr9DPY9EzjQQ5n2kkkzw56xHbL/Lp/J/7jAcf+Nf4B+ckki+ujEgfgb3/AElYeskkeKcylflPov8Ago+Kr/Akkkv8ZV9FqQBkkkm4MFUkkgC7QtL4ZJI4SJO35SSQIKeVP/rJJAA2XIw9XnJJBQbwY/WeyQDteZ+cGZ7JIvrWeObf4/lGV5H2/WSSaTxjUtuX1hbnr7/pJJCJcySSSg//2Q==",
                    "https://www.kindpng.com/picc/m/496-4964542_steam-profile-pic-meme-hd-png-download.png",
                    "https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg",
                    "https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"
                    
                ],
                index: 0
            },
            isVisible : false
        }
        this.imageRef = React.createRef();
        this.toggleIsVisible = this.toggleIsVisible.bind(this);
    }

    handleNext = (sign: string) => {
        var sliderDataObject = this.state.sliderImageData;
        var n = sliderDataObject.images.length - 1;

        if (sign ==="+") {
            if(sliderDataObject.index===n) {
                sliderDataObject.index = sliderDataObject.index - n;
            } else {
                sliderDataObject.index ++;
            }
        } else if (sign === "-" && sliderDataObject.index ===0) {
            sliderDataObject.index = n;
        } else {
            sliderDataObject.index--;
        }

        this.setState(
            { sliderImageData : sliderDataObject }
        );
    }

    toggleIsVisible = () => {
        this.setState(
            { isVisible : !this.state.isVisible }
        );
    }

    addBorder = () => {
        console.log(this.imageRef);
    }

    render(){
        const styleObject: {
            width:string , height:string, "object-fit":string
        } = {
            width: "350px",
            height: "220px",
            "object-fit": "cover"
        }

        const imageSlider = (
            <div>
                <button className="btn btn-light rounded-circle" onClick={()=>this.handleNext("-")}><FaAngleDoubleLeft/></button>
                <img 
                style={styleObject}
                src={this.state.sliderImageData.images[this.state.sliderImageData.index]}
                alt="images"
                // ref={this.imageRef}
                onClick={()=>this.addBorder()}/>
                <button className="btn btn-light rounded-circle" onClick={()=>this.handleNext("+")}><FaAngleDoubleRight/></button>
            </div>
        );

        return(
            <>
                {this.state.isVisible ? imageSlider : null}
                {this.state.isVisible ? null : 
                <button className="btn btn-light" onClick={this.toggleIsVisible.bind(this)}>
                    <span>Select Display Photo</span>
                </button>}
            </>
        )
    }
}