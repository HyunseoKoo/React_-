import { dummy } from './pages/Home/movieDummy';
import Movie from './components/Movie';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="app-container">
        {/* dummy 데이터의 results의 갯수만큼 <Movie /> jsx 파일의 movie가 반복됨 */}
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              adult={item.adult}
              release_date={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
