import React, {Component} from 'react';
import '../styles/App.css';
import Task from './Task';
import Lightbulb from '../images/lightbulb.jpg';
import Bubble from '../images/bubble.jpg';
import BubbleSoap from '../images/bubblesSoap.jpg';
import Butterfly from '../images/thunderstorm.jpg';
import Bridge from '../images/Bridge.jpg';
import Sky from '../images/sky.jpg';
class App extends Component {

    state = {
        activeSelecting:false,
        name: '',
        work: '',
        tasks: [
           
        ]
    }
    integration = {
        counterId: 3,
        name: '',
        motivCounter:0,
        tasksKillCounter: 0,
        tasksKillMotiv: ['','Piękny początek', 'Niesamowite, tak trzymaj', 'Tripple-kill', 'Sukces', 'Pięć zadań za tobą, rządzisz','Masz nadprzyrodzone siły' ],
        tasksKill: ['', 'Jedno zadanie, świetnie', 'Dwa zadania, to pestka', 'Trzy zadania, do dzieła', 'Cztery, nic strasznego', 'Trochę jest do zrobienia']
    }
    delete = id => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id)
        this.integration.tasksKillCounter--;
        this.setState({tasks})
    }
    addWork = e => {
        this.setState({work: e.target.value})
    }

    addImportant = (id) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.important = !task.important;
            }
        })
        this.setState({tasks})

    }
    doneTask = (id) => {

        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                if (!task.done) {
                    task.done = !task.done;
                    this.integration.tasksKillCounter--
                    this.integration.motivCounter++

                } else {
                    task.done = !task.done;
                    this.integration.motivCounter--
                    this.integration.tasksKillCounter++

                }
            }
        })
        this.setState({tasks})
    }

    counter = 2;
    addTaskKeyPress = event => {
        if (event.key === "Enter") {
            if (this.state.work) {

                const tasks = {
                    id: this.integration.counterId,
                    work: this.state.work,
                    important: false,
                    done: false
                };
                this.integration.tasksKillCounter++;
                this.setState(prevState => ({
                    tasks: [
                        ...prevState.tasks,
                        tasks
                    ],
                    work: ''
                }))
                this.integration.counterId++
            }
        }
    }
    
    handleChangeName = e => {
        this.setState({name: e.target.value})
    }
    addNameKeyPress = e => {
        if (e.key === "Enter") {
            this.integration.name = this.state.name;
            this.setState({})

        }

    }
    resetTasks = () => {
        let tasks = [...this.state.tasks];

        tasks = tasks.filter(task => task.done !== true)
        this.integration.motivCounter = 0;
        this.setState({tasks})

    }
    changeWallpaper = e => {
      const wallpaper = e.target.getAttribute('data-wallpaper');
      const App = document.querySelector('.App');
console.log(wallpaper)
      if(wallpaper === "bridge"){
        App.style.backgroundImage = `url(${Bridge})`;

      }else if (wallpaper === "sky"){
        App.style.backgroundImage = `url(${Sky})`;

      }else if (wallpaper === "bubble"){
        App.style.backgroundImage = `url(${Bubble})`;

      }else if (wallpaper === "bubbleSoap"){
        App.style.backgroundImage = `url(${BubbleSoap})`;

      }else if (wallpaper === "lightbulb"){
        App.style.backgroundImage = `url(${Lightbulb})`;

      }else if (wallpaper === "butterfly"){
        App.style.backgroundImage = `url(${Butterfly})`;

      }
      


    }
    addActive= () =>{

      this.setState({
        activeSelecting: !this.state.activeSelecting,
      })
    }
    componentWillMount = () => {
        window.addEventListener('keypress', this.addTaskKeyPress)
        if (!this.integration.name) {
            window.addEventListener('keypress', this.addNameKeyPress)
        }
    }
    render() {
        const {tasksKill, name, tasksKillCounter, tasksKillMotiv, motivCounter} = this.integration;
        const {tasks, work, activeSelecting} = this.state;


        const tasksList = tasks.map(task => <Task
            key={task.id}
            delete={this.delete}
            important={this.addImportant}
            done={this.doneTask}
            task={task}/>);
            console.log(tasksKillCounter);
            
        if (this.integration.name) {
            return (
                <div className="App">
                    <div onClick={this.addActive} style={activeSelecting?{zIndex:10}:null} className={"wallpapers"}> 
                         <div data-wallpaper="bridge" onClick={this.changeWallpaper}></div>
                         <div data-wallpaper="sky" onClick={this.changeWallpaper}></div>
                         <div data-wallpaper="bubble" onClick={this.changeWallpaper}></div>
                         <div data-wallpaper="bubbleSoap" onClick={this.changeWallpaper}></div>
                         <div data-wallpaper="lightbulb" onClick={this.changeWallpaper}></div>
                         <div data-wallpaper='butterfly' onClick={this.changeWallpaper}></div>
                        </div>
                    {name
                        ? <h3 className='welcome'>Miło cię widzieć, {name}</h3>
                        : null}
                    <label
                        
                        className={work
                        ? 'active'
                        : ''}
                        htmlFor="">
                        <input type="text" placeholder="W porządku, jakie plany na dzisiaj?" value={this.state.work} onChange={this.addWork}/>
                        <section>
                            <i className="far fa-edit"></i>
                        </section>
                    </label>
                    <div className="cont">
                        <h4>{tasks.length <= 4
                                ? tasksKill[tasksKillCounter]
                                : tasksKill[tasksKill.length-1]}</h4>
                        {tasks.length
                            ? <span className="reset">
                                   <p>{motivCounter?tasksKillMotiv[motivCounter]:null}</p>
                                    <span
                                      
                                        onClick={this.resetTasks}>{motivCounter?<p>Reset</p>:null}</span>
                                </span>
                            : null}
                    </div>

                    <ul>
                        {tasksList}
                    </ul>
                    <div className="selectingWallpaper">
                    <p onClick = {this.addActive} >Select background</p> <p>Inspired by <a target="blank" href="https://inspiringtodoapp.com/">inspiringtodoapp.com/</a></p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <h3 className='selectName'>Cześć, podaj imię :)</h3>
                    <label htmlFor="">
                        <input type="text" onChange={this.handleChangeName}/>
                    </label>
                </div>
            );
        }

    }
}

export default App;
