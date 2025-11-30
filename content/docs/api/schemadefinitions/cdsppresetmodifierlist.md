---
title: CDspPresetModifierList
---

# Interface CDspPresetModifierList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDspPresetModifierList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDspPresetModifierList : ISchemaClass<CDspPresetModifierList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CDspPresetModifierList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DspName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDspPresetModifierList.cs#L18)

```csharp
string DspName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Modifiers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDspPresetModifierList.cs#L20)

```csharp
ref CUtlVector<CDSPMixgroupModifier> Modifiers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CDSPMixgroupModifier](/docs/api/schemadefinitions/cdspmixgroupmodifier)>

