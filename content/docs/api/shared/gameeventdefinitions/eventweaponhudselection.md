---
title: EventWeaponhudSelection
---

```csharp
public interface EventWeaponhudSelection : IGameEvent<EventWeaponhudSelection>
```

- Implements

## Properties

### **EntIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L55)

```csharp
int EntIndex { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Mode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L48)

```csharp
byte Mode { get; set; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L41)

```csharp
int UserId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L23)

```csharp
CCSPlayerController UserIdController { get; }
```

- Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### **UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L30)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

- Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### **UserIdPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponhudSelection.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

- Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

