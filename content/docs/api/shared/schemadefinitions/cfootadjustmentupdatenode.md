---
title: CFootAdjustmentUpdateNode
---

```csharp
public interface CFootAdjustmentUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootAdjustmentUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationDriven

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L34)

```csharp
ref bool AnimationDriven { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BasePoseCacheHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L20)

```csharp
CPoseHandle BasePoseCacheHandle { get; }
```

#### Property Value

- [CPoseHandle](/docs/api/shared/schemadefinitions/cposehandle)

### Clips

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L18)

```csharp
ref CUtlVector<HSequence> Clips { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[HSequence](/docs/api/shared/schemadefinitions/hsequence)>

### FacingTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L22)

```csharp
CAnimParamHandle FacingTarget { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L32)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StepHeightMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L28)

```csharp
ref float StepHeightMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StepHeightMaxAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L30)

```csharp
ref float StepHeightMaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L26)

```csharp
ref float TurnTimeMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L24)

```csharp
ref float TurnTimeMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

