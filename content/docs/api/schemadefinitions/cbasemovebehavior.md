---
title: CBaseMoveBehavior
---

# Interface CBaseMoveBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseMoveBehavior : CPathKeyFrame, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPathKeyFrame>, ISchemaClass<CBaseMoveBehavior>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPathKeyFrame](/docs/api/schemadefinitions/cpathkeyframe)
- [CLogicalEntity](/docs/api/schemadefinitions/clogicalentity)
- [CServerOnlyEntity](/docs/api/schemadefinitions/cserveronlyentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CServerOnlyEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLogicalEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPathKeyFrame>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseMoveBehavior>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimEndTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L24)

```csharp
ref float AnimEndTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L22)

```csharp
ref float AnimStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AverageSpeedAcrossFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L26)

```csharp
ref float AverageSpeedAcrossFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentKeyFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L28)

```csharp
CPathKeyFrame? CurrentKeyFrame { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/schemadefinitions/cpathkeyframe)?

### Direction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L38)

```csharp
ref int Direction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionInterpolator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L18)

```csharp
ref int PositionInterpolator { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PostKeyFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L34)

```csharp
CPathKeyFrame? PostKeyFrame { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/schemadefinitions/cpathkeyframe)?

### PreKeyFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L32)

```csharp
CPathKeyFrame? PreKeyFrame { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/schemadefinitions/cpathkeyframe)?

### RotationInterpolator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L20)

```csharp
ref int RotationInterpolator { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetKeyFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L30)

```csharp
CPathKeyFrame? TargetKeyFrame { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/schemadefinitions/cpathkeyframe)?

### TimeIntoFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L36)

```csharp
ref float TimeIntoFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

