---
title: CTestBlendContainer
---

# Interface CTestBlendContainer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTestBlendContainer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTestBlendContainer : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CTestBlendContainer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)
- [ISchemaClass<CVoiceContainerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTestBlendContainer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FirstSound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTestBlendContainer.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> FirstSound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

### SecondSound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTestBlendContainer.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> SecondSound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

