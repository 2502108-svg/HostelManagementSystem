namespace HostelManagementSystem.Domain.Entities
{
    public class Room
    {
        public int Id { get; set; }
        public string? RoomNumber { get; set; }
        public string? RoomType { get; set; }
        public int Capacity { get; set; }
        public int OccupiedSeats { get; set; }
    }
}