const ChangeHistoryPage = () => {
    return ( 
        <>
        <div>
            <h1>Change History</h1>
            <p>This page will display the change history of the application.</p>
        </div>
        <div>
            <strong className="text-2xl">Background</strong>
            <hr></hr>
            Working on creating a project that shows how next-auth integrates with Next.js to provide 
            OAuth2.0 with Google as provider.

        </div>
        <div className="mt-12">
            Created a regular Next.js project using the command 
            <code className='border p-1 mx-1'>npx create-next-app@latest</code>
            and selected, Typescript, Tailwind, no src folder. The version of current Next.js is 15
        </div>
        <div>
            The project can be learn with first doing <code className='border p-1 mx-1'> npm i </code> after change directory to the new project folder created by 
            followed by the create-next-app command and then <code className='border p-1 mx-1'> npm run dev</code> that builds and runs the application on <i> http://localhost:3000</i>
        </div>

        <div>
            For adding a change log i have already created this route at /change-history by
            creating a subfolder 'change-history' inside the 'app' folder and then adding a page.tsx file which
            exports a functional component that Next js will render as the output when the route '/change-history' is accessed.
            This is the file based routing which is very convinient as I can see.
        </div>

        <div>
            Currently i m adding all these change logs as <code> div elements</code> and I want to create a 
            component to render a change.
        </div>


        </>


        
    )
}

export default ChangeHistoryPage;