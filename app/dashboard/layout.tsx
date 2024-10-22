{/* ↓：これを書いたファイルはレイアウトの一部とみなす */ }
import SideNav from '@/app/ui/dashboard/sidenav';

{/* ↓： children：で子要素にデータを渡すよ宣言してる、子要素にデータを渡す形式も指定してる。React.React Nodeとすることで、ReactのSideNavを送ることができてる*/ }
{/* ↓： ただし、children: null としても問題なく表示できてしまうため、ここで宣言している意味はよくわからない。これからコード追加したら変わるんけ？ */ }
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* ↓：サイドメニューの右側の余白設定div */}
            <div className="w-full flex-none md:w-64">
                {/* ↓：importしたところからSideNav / まではレイアウトの一部とみなす */}
                <SideNav />
            </div>
            {/* ↓： childrenを宣言することにより、指定したdiv内の表示内容はネストされたdashboard/page.tsx が表示される*/}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
