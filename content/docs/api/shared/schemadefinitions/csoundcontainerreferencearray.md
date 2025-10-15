---
title: CSoundContainerReferenceArray
---

```csharp
public interface CSoundContainerReferenceArray : ISchemaClass<CSoundContainerReferenceArray>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Sounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L19)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCVoiceContainerBase>> Sounds { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/shared/schemadefinitions/infoforresourcetypecvoicecontainerbase)>>

### Sounds1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L21)

```csharp
ref CUtlVector<PointerTo<CVoiceContainerBase>> Sounds1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CVoiceContainerBase](/docs/api/shared/schemadefinitions/cvoicecontainerbase)>>

### UseReference

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReferenceArray.cs#L17)

```csharp
ref bool UseReference { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

