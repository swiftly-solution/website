---
title: CModelConfigElement_RandomPick
---

# Interface CModelConfigElement_RandomPick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_RandomPick.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CModelConfigElement_RandomPick : CModelConfigElement, ISchemaClass<CModelConfigElement>, ISchemaClass<CModelConfigElement_RandomPick>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CModelConfigElement](/docs/api/schemadefinitions/cmodelconfigelement)
- [ISchemaClass<CModelConfigElement>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CModelConfigElement_RandomPick>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChoiceWeights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_RandomPick.cs#L20)

```csharp
ref CUtlVector<float> ChoiceWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Choices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_RandomPick.cs#L18)

```csharp
ref CUtlVector<CUtlString> Choices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

