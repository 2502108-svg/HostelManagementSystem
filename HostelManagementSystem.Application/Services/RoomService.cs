using HostelManagementSystem.Application.Interfaces;
using HostelManagementSystem.Domain.Entities;

namespace HostelManagementSystem.Application.Services
{
    public class RoomService : IRoomService
    {
        private readonly IRoomRepository _repository;

        public RoomService(IRoomRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Room>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }
    }
}