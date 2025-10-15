---
title: VacNetShot
---

```csharp
public interface VacNetShot : ITypedProtobuf<VacNetShot>, INativeHandle
```

#### Implements

## Properties

### DeltaPitchWindow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L31)

```csharp
IProtobufRepeatedFieldValueType<float> DeltaPitchWindow { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DeltaYawWindow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L28)

```csharp
IProtobufRepeatedFieldValueType<float> DeltaYawWindow { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DistanceToHurtTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L25)

```csharp
float DistanceToHurtTarget { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L19)

```csharp
int HitType { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L16)

```csharp
int RoundNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SteamidPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L13)

```csharp
ulong SteamidPlayer { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### WeaponType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/VacNetShot.cs#L22)

```csharp
int WeaponType { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

