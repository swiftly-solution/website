---
title: CCSPlayer_WaterServices
---

```csharp
public interface CCSPlayer_WaterServices : CPlayer_WaterServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WaterServices>, ISchemaClass<CCSPlayer_WaterServices>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AirFinishedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L20)

```csharp
GameTime_t AirFinishedTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **DrownDmgRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L18)

```csharp
ref int DrownDmgRate { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NextDrownDamageTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L16)

```csharp
GameTime_t NextDrownDamageTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **SwimSoundTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L26)

```csharp
ref float SwimSoundTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **WaterJumpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L22)

```csharp
ref float WaterJumpTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **WaterJumpVel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WaterServices.cs#L24)

```csharp
ref Vector WaterJumpVel { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

