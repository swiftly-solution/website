---
title: CVoiceContainerSwitch
---

# Interface CVoiceContainerSwitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerSwitch.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerSwitch : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerSwitch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)
- [ISchemaClass<CVoiceContainerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVoiceContainerSwitch>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### SoundsToPlay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerSwitch.cs#L18)

```csharp
ref CUtlVector<CSoundContainerReference> SoundsToPlay { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSoundContainerReference](/docs/api/schemadefinitions/csoundcontainerreference)>

