---
title: CSGOInputHistoryEntryPB
---

```csharp
public interface CSGOInputHistoryEntryPB : ITypedProtobuf<CSGOInputHistoryEntryPB>, INativeHandle
```

#### Implements

## Properties

### ClInterp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L28)

```csharp
CSGOInterpolationInfoPB_CL ClInterp { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB_CL](/docs/api/shared/protobufdefinitions/csgointerpolationinfopb_cl)

### FrameNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L40)

```csharp
int FrameNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerInterp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L37)

```csharp
CSGOInterpolationInfoPB PlayerInterp { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/shared/protobufdefinitions/csgointerpolationinfopb)

### PlayerTickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L22)

```csharp
int PlayerTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerTickFraction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L25)

```csharp
float PlayerTickFraction { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RenderTickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L16)

```csharp
int RenderTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RenderTickFraction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L19)

```csharp
float RenderTickFraction { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShootPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L46)

```csharp
Vector ShootPosition { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SvInterp0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L31)

```csharp
CSGOInterpolationInfoPB SvInterp0 { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/shared/protobufdefinitions/csgointerpolationinfopb)

### SvInterp1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L34)

```csharp
CSGOInterpolationInfoPB SvInterp1 { get; }
```

#### Property Value

- [CSGOInterpolationInfoPB](/docs/api/shared/protobufdefinitions/csgointerpolationinfopb)

### TargetAbsAngCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L55)

```csharp
QAngle TargetAbsAngCheck { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### TargetAbsPosCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L52)

```csharp
Vector TargetAbsPosCheck { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TargetEntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L43)

```csharp
int TargetEntIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetHeadPosCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L49)

```csharp
Vector TargetHeadPosCheck { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ViewAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSGOInputHistoryEntryPB.cs#L13)

```csharp
QAngle ViewAngles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

