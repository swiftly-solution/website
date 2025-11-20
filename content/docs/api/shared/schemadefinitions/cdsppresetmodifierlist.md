---
title: CDspPresetModifierList
---

```csharp
public interface CDspPresetModifierList : ISchemaClass<CDspPresetModifierList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DspName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDspPresetModifierList.cs#L18)

```csharp
string DspName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Modifiers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDspPresetModifierList.cs#L20)

```csharp
ref CUtlVector<CDSPMixgroupModifier> Modifiers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CDSPMixgroupModifier](/docs/api/shared/schemadefinitions/cdspmixgroupmodifier)>

