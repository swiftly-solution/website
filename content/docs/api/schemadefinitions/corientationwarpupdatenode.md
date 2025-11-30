---
title: COrientationWarpUpdateNode
---

# Interface COrientationWarpUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface COrientationWarpUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<COrientationWarpUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<COrientationWarpUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Damping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L32)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### EnablePreferredRotationDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L38)

```csharp
ref bool EnablePreferredRotationDirection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FallbackTargetPositionParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L24)

```csharp
CAnimParamHandle FallbackTargetPositionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### MaxRootMotionScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L36)

```csharp
ref float MaxRootMotionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Mode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L18)

```csharp
ref OrientationWarpMode_t Mode { get; }
```

#### Property Value

- [OrientationWarpMode_t](/docs/api/schemadefinitions/orientationwarpmode_t)

### PreferredRotationDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L40)

```csharp
ref AnimValueSource PreferredRotationDirection { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/schemadefinitions/animvaluesource)

### PreferredRotationThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L42)

```csharp
ref float PreferredRotationThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RootMotionSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L34)

```csharp
ref OrientationWarpRootMotionSource_t RootMotionSource { get; }
```

#### Property Value

- [OrientationWarpRootMotionSource_t](/docs/api/schemadefinitions/orientationwarprootmotionsource_t)

### TargetOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L28)

```csharp
ref float TargetOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetOffsetMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L26)

```csharp
ref OrientationWarpTargetOffsetMode_t TargetOffsetMode { get; }
```

#### Property Value

- [OrientationWarpTargetOffsetMode_t](/docs/api/schemadefinitions/orientationwarptargetoffsetmode_t)

### TargetOffsetParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L30)

```csharp
CAnimParamHandle TargetOffsetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L20)

```csharp
CAnimParamHandle TargetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetPositionParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L22)

```csharp
CAnimParamHandle TargetPositionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

