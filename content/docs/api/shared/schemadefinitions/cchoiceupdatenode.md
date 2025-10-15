---
title: CChoiceUpdateNode
---

```csharp
public interface CChoiceUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CChoiceUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L27)

```csharp
ref ChoiceBlendMethod BlendMethod { get; }
```

#### Property Value

- [ChoiceBlendMethod](/docs/api/shared/schemadefinitions/choiceblendmethod)

### BlendTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L29)

```csharp
ref float BlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BlendTimes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L21)

```csharp
ref CUtlVector<float> BlendTimes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L17)

```csharp
ref CUtlVector<CAnimUpdateNodeRef> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)>

### ChoiceChangeMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L25)

```csharp
ref ChoiceChangeMethod ChoiceChangeMethod { get; }
```

#### Property Value

- [ChoiceChangeMethod](/docs/api/shared/schemadefinitions/choicechangemethod)

### ChoiceMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L23)

```csharp
ref ChoiceMethod ChoiceMethod { get; }
```

#### Property Value

- [ChoiceMethod](/docs/api/shared/schemadefinitions/choicemethod)

### CrossFade

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L31)

```csharp
ref bool CrossFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontResetSameSelection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L35)

```csharp
ref bool DontResetSameSelection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetChosen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L33)

```csharp
ref bool ResetChosen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChoiceUpdateNode.cs#L19)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

