import Image from 'next/image'
import logo from '@/public/Pict Inventory.png'
import { useState } from 'react'
import Link from 'next/link'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Handle login logic here
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-row items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <div className="bg-white rounded-md shadow-2xl p-24 w-max h-max">
          <div className="flex flex-row items-center">
            <div className="mr-8">
              <Image
                src={logo}
                alt="Inventory Logo"
                width={250}
                height={250}
              />
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="mt-1 block w-full px-5 py-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="mt-1 block w-full px-5 py-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Link href="/pages/dashboard" legacyBehavior>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                </Link>

                <div className="text-center text-gray-500">
                  New User? <Link href="/register" legacyBehavior><span className="text-gray-700 hover:underline hover:text-sky-600">Register</span></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


