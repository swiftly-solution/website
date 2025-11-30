---
title: CSoundContainerReferenceArray
---

# Interface CSoundContainerReferenceArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundContainerReferenceArray : ISchemaClass<CSoundContainerReferenceArray>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSoundContainerReferenceArray>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Sounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L20)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCVoiceContainerBase>> Sounds { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>>

### Sounds1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L22)

```csharp
ref CUtlVector<PointerTo<CVoiceContainerBase>> Sounds1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)>>

### UseReference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L18)

```csharp
ref bool UseReference { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

