---
title: CFuncTrackChange
---

```csharp
public interface CFuncTrackChange : CFuncPlatRot, CFuncPlat, CBasePlatTrain, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBasePlatTrain>, ISchemaClass<CFuncPlat>, ISchemaClass<CFuncPlatRot>, ISchemaClass<CFuncTrackChange>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Code

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L30)

```csharp
ref TRAIN_CODE Code { get; }
```

#### Property Value

- [TRAIN_CODE](/docs/api/shared/schemadefinitions/train_code)

### TargetState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L32)

```csharp
ref int TargetState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TrackBottom

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L20)

```csharp
CPathTrack? TrackBottom { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### TrackBottomName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L26)

```csharp
string TrackBottomName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TrackTop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L18)

```csharp
CPathTrack? TrackTop { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### TrackTopName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L24)

```csharp
string TrackTopName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Train

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L22)

```csharp
CFuncTrackTrain? Train { get; }
```

#### Property Value

- [CFuncTrackTrain](/docs/api/shared/schemadefinitions/cfunctracktrain)?

### TrainName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L28)

```csharp
string TrainName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Use

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L34)

```csharp
ref int Use { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

