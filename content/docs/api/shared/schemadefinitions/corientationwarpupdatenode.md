---
title: COrientationWarpUpdateNode
---

```csharp
public interface COrientationWarpUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<COrientationWarpUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Damping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L31)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### EnablePreferredRotationDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L37)

```csharp
ref bool EnablePreferredRotationDirection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FallbackTargetPositionParam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L23)

```csharp
CAnimParamHandle FallbackTargetPositionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### MaxRootMotionScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L35)

```csharp
ref float MaxRootMotionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L17)

```csharp
ref OrientationWarpMode_t Mode { get; }
```

#### Property Value

- [OrientationWarpMode_t](/docs/api/shared/schemadefinitions/orientationwarpmode_t)

### PreferredRotationDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L39)

```csharp
ref AnimValueSource PreferredRotationDirection { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### PreferredRotationThreshold

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L41)

```csharp
ref float PreferredRotationThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RootMotionSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L33)

```csharp
ref OrientationWarpRootMotionSource_t RootMotionSource { get; }
```

#### Property Value

- [OrientationWarpRootMotionSource_t](/docs/api/shared/schemadefinitions/orientationwarprootmotionsource_t)

### TargetOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L27)

```csharp
ref float TargetOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetOffsetMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L25)

```csharp
ref OrientationWarpTargetOffsetMode_t TargetOffsetMode { get; }
```

#### Property Value

- [OrientationWarpTargetOffsetMode_t](/docs/api/shared/schemadefinitions/orientationwarptargetoffsetmode_t)

### TargetOffsetParam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L29)

```csharp
CAnimParamHandle TargetOffsetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetParam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L19)

```csharp
CAnimParamHandle TargetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetPositionParam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/COrientationWarpUpdateNode.cs#L21)

```csharp
CAnimParamHandle TargetPositionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

