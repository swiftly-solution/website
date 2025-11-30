---
title: CFuncTrackChange
---

# Interface CFuncTrackChange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFuncTrackChange : CFuncPlatRot, CFuncPlat, CBasePlatTrain, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBasePlatTrain>, ISchemaClass<CFuncPlat>, ISchemaClass<CFuncPlatRot>, ISchemaClass<CFuncTrackChange>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CFuncPlatRot](/docs/api/schemadefinitions/cfuncplatrot)
- [CFuncPlat](/docs/api/schemadefinitions/cfuncplat)
- [CBasePlatTrain](/docs/api/schemadefinitions/cbaseplattrain)
- [CBaseToggle](/docs/api/schemadefinitions/cbasetoggle)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseToggle>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlatTrain>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFuncPlat>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFuncPlatRot>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFuncTrackChange>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Code

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L30)

```csharp
ref TRAIN_CODE Code { get; }
```

#### Property Value

- [TRAIN_CODE](/docs/api/schemadefinitions/train_code)

### TargetState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L32)

```csharp
ref int TargetState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TrackBottom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L20)

```csharp
CPathTrack? TrackBottom { get; }
```

#### Property Value

- [CPathTrack](/docs/api/schemadefinitions/cpathtrack)?

### TrackBottomName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L26)

```csharp
string TrackBottomName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TrackTop

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L18)

```csharp
CPathTrack? TrackTop { get; }
```

#### Property Value

- [CPathTrack](/docs/api/schemadefinitions/cpathtrack)?

### TrackTopName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L24)

```csharp
string TrackTopName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Train

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L22)

```csharp
CFuncTrackTrain? Train { get; }
```

#### Property Value

- [CFuncTrackTrain](/docs/api/schemadefinitions/cfunctracktrain)?

### TrainName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L28)

```csharp
string TrainName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Use

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncTrackChange.cs#L34)

```csharp
ref int Use { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

