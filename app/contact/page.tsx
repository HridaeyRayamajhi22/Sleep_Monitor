'use client'

const ContactPage = () => {
    return(
        <div className="">
            {/* Hero Section */}
            <section className="">
                <h1 className="">Contact SleepTracker</h1>
                <p className="">
                    Have question or need help > GEt in touch !
                </p>
            </section>

            {/* Contact form Section */}
            <section className="">
                <h2 className="">
                    Get in touch
                </h2>
                <form className="" onSubmit={(e)}>
                    e.preventDefault()
                    const name = (document.getElementById('name') as HTMLInputElement)
                    ?.value;
                    const email = (document.getElementById('email') as HTMLInputElement)?<div className="value">
                        const message =(
                            document.getElementById('message') as HTMLTextAreaElement
                        )?.value
                        const mailtoLink = `mailto:support@sleepmonitor.com?subject=Message from ${name}&body=Email: ${}`
                    </div>
                </form>
            </section>
        </div>
    )
}