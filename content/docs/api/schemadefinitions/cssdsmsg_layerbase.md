---
title: CSSDSMsg_LayerBase
---

# Interface CSSDSMsg_LayerBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSSDSMsg_LayerBase : ISchemaClass<CSSDSMsg_LayerBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSSDSMsg_LayerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DisplayText

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L26)

```csharp
string DisplayText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L22)

```csharp
ref ulong LayerId { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### LayerName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L24)

```csharp
string LayerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ViewId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L18)

```csharp
SceneViewId_t ViewId { get; }
```

#### Property Value

- [SceneViewId_t](/docs/api/schemadefinitions/sceneviewid_t)

### ViewName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_LayerBase.cs#L20)

```csharp
string ViewName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

