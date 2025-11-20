---
title: CSSDSMsg_ViewTargetList
---

```csharp
public interface CSSDSMsg_ViewTargetList : ISchemaClass<CSSDSMsg_ViewTargetList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Targets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L22)

```csharp
ref CUtlVector<CSSDSMsg_ViewTarget> Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CSSDSMsg_ViewTarget](/docs/api/shared/schemadefinitions/cssdsmsg_viewtarget)>

### ViewId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L18)

```csharp
SceneViewId_t ViewId { get; }
```

#### Property Value

- [SceneViewId_t](/docs/api/shared/schemadefinitions/sceneviewid_t)

### ViewName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L20)

```csharp
string ViewName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

