---
title: CFootAdjustmentUpdateNode
---

# Interface CFootAdjustmentUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFootAdjustmentUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootAdjustmentUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFootAdjustmentUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimationDriven

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L34)

```csharp
ref bool AnimationDriven { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BasePoseCacheHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L20)

```csharp
CPoseHandle BasePoseCacheHandle { get; }
```

#### Property Value

- [CPoseHandle](/docs/api/schemadefinitions/cposehandle)

### Clips

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L18)

```csharp
ref CUtlVector<HSequence> Clips { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[HSequence](/docs/api/schemadefinitions/hsequence)>

### FacingTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L22)

```csharp
CAnimParamHandle FacingTarget { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### ResetChild

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L32)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StepHeightMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L28)

```csharp
ref float StepHeightMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StepHeightMaxAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L30)

```csharp
ref float StepHeightMaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L26)

```csharp
ref float TurnTimeMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L24)

```csharp
ref float TurnTimeMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

