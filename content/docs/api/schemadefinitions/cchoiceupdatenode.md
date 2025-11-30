---
title: CChoiceUpdateNode
---

# Interface CChoiceUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CChoiceUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CChoiceUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CChoiceUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L28)

```csharp
ref ChoiceBlendMethod BlendMethod { get; }
```

#### Property Value

- [ChoiceBlendMethod](/docs/api/schemadefinitions/choiceblendmethod)

### BlendTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L30)

```csharp
ref float BlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BlendTimes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L22)

```csharp
ref CUtlVector<float> BlendTimes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Children

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L18)

```csharp
ref CUtlVector<CAnimUpdateNodeRef> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimUpdateNodeRef](/docs/api/schemadefinitions/canimupdatenoderef)>

### ChoiceChangeMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L26)

```csharp
ref ChoiceChangeMethod ChoiceChangeMethod { get; }
```

#### Property Value

- [ChoiceChangeMethod](/docs/api/schemadefinitions/choicechangemethod)

### ChoiceMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L24)

```csharp
ref ChoiceMethod ChoiceMethod { get; }
```

#### Property Value

- [ChoiceMethod](/docs/api/schemadefinitions/choicemethod)

### CrossFade

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L32)

```csharp
ref bool CrossFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontResetSameSelection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L36)

```csharp
ref bool DontResetSameSelection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetChosen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L34)

```csharp
ref bool ResetChosen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L20)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

