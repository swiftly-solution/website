---
title: CTargetSelectorUpdateNode
---

```csharp
public interface CTargetSelectorUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CTargetSelectorUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AngleMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L18)

```csharp
ref TargetSelectorAngleMode_t AngleMode { get; }
```

#### Property Value

- [TargetSelectorAngleMode_t](/docs/api/shared/schemadefinitions/targetselectoranglemode_t)

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L20)

```csharp
ref CUtlVector<CAnimUpdateNodeRef> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)>

### DesiredMoveHeadingParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L28)

```csharp
CAnimParamHandle DesiredMoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### EnablePhaseMatching

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L34)

```csharp
ref bool EnablePhaseMatching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveHeadingParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L26)

```csharp
CAnimParamHandle MoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### PhaseMatchingMaxRootMotionSkip

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L36)

```csharp
ref float PhaseMatchingMaxRootMotionSkip { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetFacePositionIsWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L32)

```csharp
ref bool TargetFacePositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFacePositionParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L24)

```csharp
CAnimParamHandle TargetFacePositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L22)

```csharp
CAnimParamHandle TargetPosition { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetPositionIsWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L30)

```csharp
ref bool TargetPositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

