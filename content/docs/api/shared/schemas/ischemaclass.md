---
title: ISchemaClass
---

```csharp
public interface ISchemaClass : INativeHandle
```

#### Implements

## Methods

### **As<K>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaClass.cs#L12)

```csharp
K As<K>() where K : ISchemaClass<K>
```

#### Returns

- K - The converted handle.

#### Type Parameters

- **K**:  - The type to convert to.

