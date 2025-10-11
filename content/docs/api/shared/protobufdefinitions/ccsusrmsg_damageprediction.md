---
title: CCSUsrMsg_DamagePrediction
---

```csharp
public interface CCSUsrMsg_DamagePrediction : ITypedProtobuf<CCSUsrMsg_DamagePrediction>, INativeHandle, INetMessage<CCSUsrMsg_DamagePrediction>, IDisposable
```

#### Implements

## Properties

### **AimPunch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L39)

```csharp
QAngle AimPunch { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **CommandNum** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L18)

```csharp
int CommandNum { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PelletIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L21)

```csharp
int PelletIdx { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ShootDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L36)

```csharp
QAngle ShootDir { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **ShootPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L33)

```csharp
Vector ShootPos { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **VictimDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L30)

```csharp
int VictimDamage { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **VictimSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L24)

```csharp
int VictimSlot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **VictimStartingHealth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_DamagePrediction.cs#L27)

```csharp
int VictimStartingHealth { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

