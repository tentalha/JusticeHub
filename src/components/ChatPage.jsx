export const ChatPage = ({ selectedContact }) => {
    return (
      <div>
        {selectedContact ? (
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to group everyone!
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
            </div>
            <div className="py-5">
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
        ) : (
          <div>
            <h1 className=" font-custom text-2xl text-center">Welcome To The CHAT App, You Can Chat with your available investigators, Give it a go</h1>
            <img className="w-full h-96" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDw8PDw8NDw8NDQ0NDw8NDQ8NDRANFREWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtKy4rLy0rLS0wLTEtLS0tLSstLS8tLS02LS0tKy0tLS0tLS0rLS0tLS0rLS0tNy0tNf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAABAAIDBAYFB//EAEAQAAIBAwEFAwkDCgcBAAAAAAABAgMREgQFEyExQVFhgQYVIlJTcZGhsRQywSNCQ1RigpKT0eFjc6KywsPwM//EABsBAQADAQEBAQAAAAAAAAAAAAABAwUCBAYH/8QANBEBAAIBAgMDCgUFAQAAAAAAAAECAwQREiExBVFhExRBQlJxkaGx0RUiMoHwQ1PB4fEj/9oADAMBAAIRAxEAPwD9NQCgNIDVwJAICgNAICBAIAAgQDcCuAAQEBXAAIBaAAADLAQMNgZYAAMAbAygNIBQCAoBQGgIBAbgaTArgQEBAQEBALAAICAUBlsAuAAAA2AMDIE0BlgZAooDV+gEgEBA0mBIBAbgIFcBuBXA0AAQEAoAuBAQFcAALgVwJgZAAMsBS6sDLYGWAASYEgNIBAgEBAUBoCAQIDSAAICAgICAgGwAAAQFYDLAAAAYAAADALASAQNJAafYAIBAQNICsA2AQKwCBAVgGwEBWAgFIAALAVgCwBYAsAMCsBkAYABJADYAgFAaTAgEBQCAgICkBqwEBAQGkAAVgICsBWArAQFYAAAACsBlgZYAwMgTAyApAIDYBSA0kBq1gKwDYBsBpAADYCsA2AbAVgKwDYCsAWArAVgBgFgCwBYAaAGgMtAWIGGgAAsBrkBAKA0kBpAICkA2AQGwFYBsBqwFYCArAKAgKwABWArAFgCwFYDIA0AMAsBmQGWBlgAEBpAKA0kBpAKA0gNWALANgGwGkBAVgCUkldtJLq2kiYiZnaHNrVrG9p2cD2hp/a0/CSf0LfNsvsy8863BHrwPOOn9rD5k+a5fZPPcHtLzjp/aR+ZPmuX2UefYPa+q846f2kfmR5rl9k8+we19S9oaf2kfmPNsvsp89we19R5x0/tYfEebZfZR59g9ox11B/paf8aX1InT5Y9WXUazBPrw5yl6YnfnCsAMDLQAAMAYGWBlgDQGbASA0kBvkBIDSAUBpAICAgIEA2A6m0daqMe2cvux/F9xfp8E5beHpebVamMNfGejz2oqTm8qjcm+S5Rj7l0NfHStI2pGzByWtknivO8uDAt3V8JxI3TwnEbnC3GK5v4HMzLqKx1ZkrkxyRMbsuJO7masSidRLmaubSa2rRd4u8esH91/0feVZcFMsfm697vBqMmCd6Ty7vQ9Po9VCtBTj7mnzjLsZi5cVsVuGX0enz1zU46/8cxUvDALAZAGBlgFgMyAyBIDSAUBpAaQCgNIBQFKSSbbSS4tvgkExE2naHRqbXpJ2XHvk8V/U444e6nZ+SY3lx+eafrU/jL+g41n4bbx+Qe3KfrU/wDUONP4bbx+TPn+l60Oz87mItvO0FuzprEzO+0e50a9Z1Jucub4JdEuhvY6cFYrD4vLfyl5v8Pd6HA0WKtjYbmysDZWBsrA2VgbBondGww4XfgN+5zNe9wyR3CqYdnY+q3VZJ/dqNQl7/zX8fqyjV4vKY9/THN6NDn8lmiJ6Tyn/D1TMN9KLAZkBlgAAwMsDLAAJAaQCgNIDfICA0gFAeW2ztfOTUeMIv0Ox/tv8O7j1KL23fRaHRcFeK3Wf5t93w51G+LZy1IiIccpsI3cbkwhvZ6yr010Tcn4JtfOx6dJXizQy+2cs00WTb07R8Z2n5bvR2N5+fbKwNlYGzuaTZ1SonKMeHFc0uPiUZM9aTtMrsenveN4hwVdPOEsZJqS6FlckWjeFVqWrO0xzdieyq8Y5OPBK74ptL3FUanHM7brZ0uWK8Uw4NNpJ1HjBXfPsSRZfLWkbyqpitedqw1qdDOl/wDRWvy5NMimauT9LrJhtj/VDqTdy6OSiebikjuFUw69VFkKLw9ppqmcIT9eEJfFJnzmSvDea90vrcV+Olbd8RLZwsDAywCwABlgZYAAIDSA0gNRAQNIBQHR29qN3p5tcHO1NW4P0nZtd9rvwObztD16LF5TPWJ9/wAHiJy5v6HmfVw+/Q2PoJRi/ttNtxTdqlKPG3Y3deJdFI72NftHPFpjyf1aew9B+tx/m0SeCver/E8/9v6nzHoFz1K5datInyde9zPaWefU+rqx2bpaVRTpV1OXGKjvKcuDXHguJ6tJWIy9Wf2prMubTzW1do3jvdk1XzKJCuF316Igeh8n9ZTqUYxTWdJONSF/STu+Nux87mZqsc1yTM9J6NbS3rbHER1jq+ZtXadL7VSmmpU6DjGrOPpRvk+znje/xPTgw28haPTPT+eLyZ81PL1n0R1/ng+/W1tGFPeyqQ3drqaknGS6Y2537jPrS1rcMRzaNsla14pnk+F5Ma6GdSnO0J1Gp01JpZR4+gu1rs7z363HO1bRziOUs/QZK72r0mejseU+rpqMaN06spqeKd5Rik/SfZ2d9+440VLTabehZr714Ir6d3wZGjDJlxSO4cWcU48LvgunedRPcptHLm9bs1WoUf8AKp/7UYOonfLb3y+m0sbYKR4R9HYZS9DLALAZkAADAywMgSA0gFAaQGgFAbQHwPLGX5Giu3Uf9cyvL0anZMf+0+7/ADDypQ+hffo6fZDjFyrvJxTlm8He3G6x4FsRTvY19TrotMRT5b/5bjQ2Mv00PGp/Y62p3q51Oun1PkKlDY751ofzP7Dhp3kajXR6nydKpT2VTkqlOtBThdr8r3W+jLcM0peLbvPqrazPhtjtTr4fu75uPkQBXCHDW01KfGcISa5ZRTOotMdHMxEuRRSWKSS5WS4EHJx0tDQi81TgpO9moq9+0Te08tyK1jmdRRp1FacYyXZJJkxMx0RO0sUaFOmrQjGN/VSQmZnq52iGmyYRLPDm+SJceLhcXUlGC5zkoruuzqZilZtPoV8M5LxWPTye1jFJJLkkkvcj52Z3nd9XEREbQmQllgDAywACsBhgAAgN8veBIDSA0BpAIHx/Kujlpsl+iqQqeHGL+Ur+Bxkjk9/Zt+HPHjyePKH0puEK4cubRyobyO/y3XpZYqTfJ24R42vbkdV235qc/lPJz5L9Tt13sZ+t4x1aLP8AzZvF2h/OF2NHqtO7QpyvjH0YtTTwS/a4voaumzRevDvzh81r9HlxWnJevKZ+f7Ods9rMFwgXCNzFrm/gOZGzMp3JiuyJndlsnZAcidkMSkTEOJlxykdRCuZfY8ndC77+S4Wapp9b85/gvEztdn/p1/f7NPs3Tc/LW/b7/Z95mY2ABlgDAywJIAkwMMDIFFgIGkBpAKA0gNIDNWnGcZQkrxnFxku2LVmgmtprMTHWHg9ZpJaebhPjKL9F9JQ6T/8Acnc88xtOz6vBnjPSLR+/v7nVucrwESxJkocEmldvi1yXQItu6VSrNSU1JqUXdNcGjqtprO8KcmOt6zS0bxL7Oi8ootJVotP14K8X71zXhc1MWvjbbI+X1XYN4nfBO8d09fj0+Ozvra2mf6WHjeP1PXGpwz60Mq3Zmrr/AE5+v0XnXTe2p/xI684w+1HxV/h+q/t2+Dv7iripbupjJKSahK1nyfI7jNjnpaPi89sGWvWs/Bw5FqncOQ2Rul2vl9R7kbnT6epVbVOLk1xfFJJd7ZGTLTHG9pTjxXyztSN31tFsFJqVZqX+HH7v7z6+4z82vmY2x8vFo4OzYid8vPw+77ZnNVAZbAywBgABcDLAy2BkCQGkBpAbXACuApgaTAUwOptPZ1PUxxndSjfCcfvRf4ruObViXo0+pvgtvX9473ldVsDVU3wgqsekqbV/GL4/C5VNJbmLtLBePzTtPj93ypN8VZpptO/B3OHvjnG8ONg2cMyUCjs+tWvuqVSpbm4RbS7m+RMRMqMuWlP1WiG35Pa39Xq/wk7T3KPOsPtw5tP5Ma189PP3SlCPi7smIlxbV4Y9Z6LYPkbClJVdQ41JRd40o8acX0cm/vPu5e87ive8Go1/FHDj5eL11ztmuDVaSlV+/FN+tykvEsx5r4/0yqyYMeT9UPh6zYs4XlBupFccbflP7+HwNLFra25W5T8mXm0Fqc6c4+b5FSpfutwt2HvrVm2u+t5MVlnUh1lCMl+67f8AI8HaNPy1t4/X/jQ7LyRx2r3x9P8Ar0NzJbYuAXAGwC4ABlsAbAGwMgWQGUAoDaYDcBTAbgKYGkwG4HDrdRu6VSp6kJSXfK3BfGxEztCzDj8pkrTvl4FRt6UuL6J/VnnfXzz5QxSoTqSxhFyk+UYq79/cu9kRG7nJkrjrxXnaHodmeS0VaWoeT57qDeP70uvuXzLa4+9i6ntSZ/Li5eL0lKEYRUYxjGMVZRilGKXckWsm1ptO89W0whXArgNwK4BkB0do7MpVuL9GfScVx8V1PTg1V8XTnHc8mp0ePPznlPf9+95+lRq6TUU5TXoOeOceMHGXB8enO9n2GpbJTU4bRXrt09PJi0x5dHqK2vHLfbf0c+T1phPpWWwC4BcAuAOQGbgFwBsAbALgADcDVwK4DkBu9gDIDWQDkB8nyk1KjRUObqzSUVxbS4/XE4yTyaPZmPfLN56Vj/T5uh2DUqNSrN04+quNVr6R+b7jitJnq92o7TpT8uLnPf6P9vRaTTUqMcacVFdbc2+1vm/EtiIjoxMuW+WeK87ufIlWMgLICyAsgFSAMwLMAzAzNRknGSUotWaaumvcTEzE7wi1YtG0xvBcyEs5ADkAZAWQBcCuAoDIABAV7e8AuA3ArgKkAZAWQDkBZgDxupWWSTSlbik+aT8Aninbbfk1mELMBUuoBmBZgWYEpgTqAGYFmAZgWYBkBZAKAgIBAUgJsDIEAAYuBXAbgIBcAuANgN7cQMOoAbwA3gEqoE6rYDvAHeAWYBmAZgWYGoy7eQBkBpMBTA3EBbAgEBsAgQABJAZAziA4gawsANAZxAHEAsBxyuEsO4GG2BhyYGcmApsDabA5I9rAmwMtsAuwGPeENOVwFIDkSA2ogaUQNKIGlEDSgA4AWAE4gGAE4gZwA5MAFQAsAHdgW6AtygDcoAenQSw9KBl6QDjlpX2AZ+xvsA19kYCtMBOgwL7OBbjuJB9n7ggbgC3IGlSA3GkQNboDSpAbVIDapgOIFiBYgWIBiAYgGIG8QHECxAbAKiBWAcQLEBUQLFhKwAsALAC3fcSLd9wFu0EFU12AW7XYBbpAG5QFuUBbtEC3aAcEA4gGIFiBYgGAE4gGIBiAYgIEBpAMQFgIEBBJAkBAQCBARIQhMCAgIgAEBAACBAAEBAAEAAQH/9k="/>
          
          </div>
        )}
      </div>
    );
  };
  