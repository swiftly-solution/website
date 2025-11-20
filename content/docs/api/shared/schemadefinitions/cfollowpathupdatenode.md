---
title: CFollowPathUpdateNode
---

```csharp
public interface CFollowPathUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFollowPathUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendOutTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L18)

```csharp
ref float BlendOutTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BlockNonPathMovement

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L20)

```csharp
ref bool BlockNonPathMovement { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FacingTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L36)

```csharp
ref AnimValueSource FacingTarget { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### MaxAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L30)

```csharp
ref float MaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L28)

```csharp
ref float MinAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Param

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L38)

```csharp
CAnimParamHandle Param { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L26)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ScaleSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L24)

```csharp
ref bool ScaleSpeed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpeedScaleBlending

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L32)

```csharp
ref float SpeedScaleBlending { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StopFeetAtGoal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L22)

```csharp
ref bool StopFeetAtGoal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TurnDamping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L34)

```csharp
CAnimInputDamping TurnDamping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### TurnToFace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L42)

```csharp
ref bool TurnToFace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TurnToFaceOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowPathUpdateNode.cs#L40)

```csharp
ref float TurnToFaceOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

