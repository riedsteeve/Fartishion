import Header_dashboard from "../../components/atoms/private_components/header_dashboard";
import WelcomeView from "../../components/atoms/private_components/welcomeView";
import TendenceView from "../../components/atoms/private_components/tendence_view";

const Dashboard_layout = () => {    
  return (
    <>
      <Header_dashboard />

      <div className="grid grid-cols-1 gap-8 px-6 md:px-40 py-10">
        <WelcomeView />
        <TendenceView />
      </div>
    </>
  )
}

export default Dashboard_layout