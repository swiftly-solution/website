---
title: CSSDSMsg_ViewTargetList
---

# Interface CSSDSMsg_ViewTargetList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSSDSMsg_ViewTargetList : ISchemaClass<CSSDSMsg_ViewTargetList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSSDSMsg_ViewTargetList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Targets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L22)

```csharp
ref CUtlVector<CSSDSMsg_ViewTarget> Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSSDSMsg_ViewTarget](/docs/api/schemadefinitions/cssdsmsg_viewtarget)>

### ViewId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L18)

```csharp
SceneViewId_t ViewId { get; }
```

#### Property Value

- [SceneViewId_t](/docs/api/schemadefinitions/sceneviewid_t)

### ViewName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L20)

```csharp
string ViewName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

