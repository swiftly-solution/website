---
title: CSSDSMsg_ViewTargetList
---

```csharp
public interface CSSDSMsg_ViewTargetList : ISchemaClass<CSSDSMsg_ViewTargetList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Targets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L21)

```csharp
ref CUtlVector Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### ViewId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L16)

```csharp
SceneViewId_t ViewId { get; }
```

#### Property Value

- [SceneViewId_t](/docs/api/shared/schemadefinitions/sceneviewid_t)

### ViewName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L18)

```csharp
string ViewName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

