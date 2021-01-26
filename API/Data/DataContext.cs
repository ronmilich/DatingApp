using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<UserLike> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserLike>()
              .HasKey(k => new { k.SourceUserId, k.LikedUserId });

            builder.Entity<UserLike>()
              .HasOne(s => s.SourceUser)
              .WithMany(l => l.LikedUsers)
              .HasForeignKey(s => s.SourceUserId)
              // deleting option - if deleting user, deleting all related entities
              // if using sqlserver need to type DeleteBehavior.NoAction instead or it wont work 
              .OnDelete(DeleteBehavior.Cascade); 

            builder.Entity<UserLike>()
            .HasOne(s => s.LikedUser)
            .WithMany(l => l.LikedByUsers)
            .HasForeignKey(s => s.LikedUserId)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}