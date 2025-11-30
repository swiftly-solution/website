---
title: CVoiceContainerEnvelope
---

# Interface CVoiceContainerEnvelope

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelope.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerEnvelope : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerEnvelope>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)
- [ISchemaClass<CVoiceContainerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVoiceContainerEnvelope>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnalysisContainer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelope.cs#L20)

```csharp
CVoiceContainerAnalysisBase? AnalysisContainer { get; }
```

#### Property Value

- [CVoiceContainerAnalysisBase](/docs/api/schemadefinitions/cvoicecontaineranalysisbase)?

### Sound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelope.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> Sound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

