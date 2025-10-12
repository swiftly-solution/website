---
title: CModelConfigElement_RandomPick
---

```csharp
public interface CModelConfigElement_RandomPick : CModelConfigElement, ISchemaClass<CModelConfigElement>, ISchemaClass<CModelConfigElement_RandomPick>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChoiceWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_RandomPick.cs#L18)

```csharp
ref CUtlVector<float> ChoiceWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Choices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_RandomPick.cs#L16)

```csharp
ref CUtlVector<CUtlString> Choices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

