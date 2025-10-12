---
title: EventAmmoPickup
---

```csharp
public interface EventAmmoPickup : IGameEvent<EventAmmoPickup>
```

- Implements

## Properties

### **Index** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L51)

```csharp
int Index { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Item** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L44)

```csharp
string Item { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L37)

```csharp
int UserId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

- Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L28)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

- Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAmmoPickup.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

- Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

