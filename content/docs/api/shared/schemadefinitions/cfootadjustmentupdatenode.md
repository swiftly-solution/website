---
title: CFootAdjustmentUpdateNode
---

```csharp
public interface CFootAdjustmentUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootAdjustmentUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationDriven

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L33)

```csharp
ref bool AnimationDriven { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BasePoseCacheHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L19)

```csharp
CPoseHandle BasePoseCacheHandle { get; }
```

#### Property Value

- [CPoseHandle](/docs/api/shared/schemadefinitions/cposehandle)

### Clips

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L17)

```csharp
ref CUtlVector<HSequence> Clips { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[HSequence](/docs/api/shared/schemadefinitions/hsequence)>

### FacingTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L21)

```csharp
CAnimParamHandle FacingTarget { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L31)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StepHeightMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L27)

```csharp
ref float StepHeightMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StepHeightMaxAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L29)

```csharp
ref float StepHeightMaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L25)

```csharp
ref float TurnTimeMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnTimeMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootAdjustmentUpdateNode.cs#L23)

```csharp
ref float TurnTimeMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

